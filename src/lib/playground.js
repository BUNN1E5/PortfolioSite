import 'playground-elements/playground-project.js';
import 'playground-elements/playground-tab-bar.js';
import 'playground-elements/playground-file-editor.js';
import 'playground-elements/playground-preview.js';

let nextProjectId = 0;

class Playground extends HTMLElement {
	connectedCallback() {
		if (this.hasAttribute('data-initialized')) return;

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

		const editorId = `${projectId}-editor`;
		const tabBar = document.createElement('playground-tab-bar');
		tabBar.setAttribute('project', projectId);
		tabBar.setAttribute('editor', editorId);

		const editor = document.createElement('playground-file-editor');
		editor.id = editorId;
		editor.setAttribute('project', projectId);

		const runButton = document.createElement('button');
		runButton.className = 'playground-run';
		runButton.type = 'button';
		runButton.textContent = 'Run code';
		/** @type {import('playground-elements/playground-preview.js').PlaygroundPreview | null} */
		let preview = null;
		runButton.addEventListener('click', () => {
			if (preview) {
				preview.reload();
				return;
			}

			preview = document.createElement('playground-preview');
			preview.setAttribute('project', projectId);
			this.append(preview);
			runButton.textContent = 'Run again';
		});

		this.append(project, tabBar, editor, runButton);
		this.setAttribute('data-initialized', '');
	}
}

if (!customElements.get('code-playground')) {
	customElements.define('code-playground', Playground);
}