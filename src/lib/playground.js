import 'playground-elements/playground-project.js';
import 'playground-elements/playground-tab-bar.js';
import 'playground-elements/playground-file-editor.js';
import 'playground-elements/playground-preview.js';

let nextProjectId = 0;

class Playground extends HTMLElement {
	static get observedAttributes() {
		return [
			'width',
			'height',
			'editor-height',
			'preview-height',
			'editor-aspect-ratio',
			'preview-aspect-ratio'
		];
	}

	attributeChangedCallback() {
		this.applySizeAttributes();
	}

	applySizeAttributes() {
		const width = this.getAttribute('width');
		this.style.removeProperty('width');
		if (width !== null) {
			if (CSS.supports('width', width)) {
				this.style.width = width;
			} else {
				console.error(`<code-playground> width="${width}" must be a valid CSS width.`);
			}
		}

		const sharedHeight = this.getAttribute('height');
		if (sharedHeight !== null && !CSS.supports('height', sharedHeight)) {
			console.error(`<code-playground> height="${sharedHeight}" must be a valid CSS height.`);
		}

		for (const panel of ['editor', 'preview']) {
			const height = this.getAttribute(`${panel}-height`) ?? sharedHeight;
			const heightProperty = `--code-playground-${panel}-height`;
			this.style.removeProperty(heightProperty);
			if (height !== null && CSS.supports('height', height)) {
				this.style.setProperty(heightProperty, height);
			} else if (height === null && this.hasAttribute(`${panel}-aspect-ratio`)) {
				this.style.setProperty(heightProperty, 'auto');
			}

			const aspectRatio = this.getAttribute(`${panel}-aspect-ratio`);
			const aspectRatioProperty = `--code-playground-${panel}-aspect-ratio`;
			this.style.removeProperty(aspectRatioProperty);
			if (aspectRatio !== null) {
				if (CSS.supports('aspect-ratio', aspectRatio)) {
					this.style.setProperty(aspectRatioProperty, aspectRatio);
				} else {
					console.error(
						`<code-playground> ${panel}-aspect-ratio="${aspectRatio}" must be a valid CSS aspect ratio.`
					);
				}
			}
		}
	}

	connectedCallback() {
		if (this.hasAttribute('data-initialized')) return;

		this.applySizeAttributes();
		this.classList.add('playground-theme-material-darker');

		const projectSrc = this.getAttribute('project-src');
		if (!projectSrc) {
			console.error('<code-playground> requires a project-src attribute.');
			return;
		}

		const projectId = `playground-project-${++nextProjectId}`;
		const project = document.createElement('playground-project');
		project.id = projectId;
		project.setAttribute('project-src', projectSrc);

		const selectedFile = this.getAttribute('selected');
		if (selectedFile) {
			project.addEventListener(
				'filesChanged',
				(event) => {
					if (!event.projectLoaded) return;

					const files = project.files ?? [];
					const fileToSelect = files.find(
						(file) => file.name === selectedFile && !file.hidden
					);
					if (!fileToSelect) {
						console.error(
							`<code-playground selected="${selectedFile}"> must match a visible project file.`
						);
						return;
					}

					for (const file of files) {
						file.selected = file === fileToSelect;
					}
				},
				{ capture: true }
			);
		}

		const editorId = `${projectId}-editor`;
		const tabBar = document.createElement('playground-tab-bar');
		tabBar.project = project;

		const editor = document.createElement('playground-file-editor');
		editor.id = editorId;
		editor.setAttribute('line-numbers', '');
		editor.project = project;
		tabBar.editor = editor;

		const runButton = document.createElement('button');
		runButton.className = 'playground-run';
		runButton.type = 'button';
		runButton.textContent = 'Run code';
		/** @type {import('playground-elements/playground-preview.js').PlaygroundPreview | null} */
		let preview = null;
		runButton.addEventListener('click', () => {
			initialize();
			if (preview) {
				preview.reload();
				return;
			}

			preview = document.createElement('playground-preview');
			preview.classList.add('playground-preview');
			preview.project = project;
			this.append(preview);
			runButton.textContent = 'Run again';
		});

		/** @type {IntersectionObserver | null} */
		let observer = null;
		let initialized = false;
		const initialize = () => {
			if (initialized) return;
			initialized = true;
			this.append(project, tabBar, editor, runButton);
			this.setAttribute('data-initialized', '');
			observer?.disconnect();
		};

		this.append(runButton);
		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(
				(entries) => {
					if (entries.some((entry) => entry.isIntersecting)) initialize();
				},
				{ rootMargin: '300px 0px' }
			);
			observer.observe(this);
		} else {
			initialize();
		}
	}
}

if (!customElements.get('code-playground')) {
	customElements.define('code-playground', Playground);
}