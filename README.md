# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.0 create --template minimal --types jsdoc --install npm portfoliosite
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Code playgrounds in blog posts

Blog Markdown supports the `<code-playground>` tag, which loads the project and
builds the editor and preview.
Provide a `project-src` URL understood by
[`playground-elements`](https://github.com/google/playground-elements) (for example,
a URL to a project manifest):

```html
<code-playground project-src="https://example.com/my-project.json"></code-playground>
```

`project-src` is required.

### Select a file

Use `selected` to open a specific visible file by its exact name:

```html
<code-playground
  project-src="https://example.com/my-project.json"
  selected="src/main.js"
></code-playground>
```

If the name does not match a visible file in the project, the playground reports
an error in the browser console.

### Set the width and panel sizes

All size values are CSS values, such as `100%`, `640px`, `50vw`, or `30rem`.
The tag's width is optional; without it, the tag uses the width available to it.
The editor and preview default to `400px` tall.

Use `editor-height` and `preview-height` to size the panels independently:

```html
<code-playground
  project-src="https://example.com/my-project.json"
  width="100%"
  editor-height="24rem"
  preview-height="500px"
></code-playground>
```

For backward compatibility, `height` sets both panel heights. A panel-specific
height overrides it:

```html
<code-playground
  project-src="https://example.com/my-project.json"
  height="400px"
  preview-height="600px"
></code-playground>
```

To keep a panel square while its width changes, set its aspect ratio to `1` and
leave its height unset. The panel fills the available width and its height follows
that width:

```html
<code-playground
  project-src="https://example.com/my-project.json"
  width="100%"
  editor-aspect-ratio="1"
  preview-aspect-ratio="1"
></code-playground>
```

Set only `editor-aspect-ratio="1"` or `preview-aspect-ratio="1"` to make just
that panel square. Other ratios are supported too; for example,
`preview-aspect-ratio="16 / 9"`. An explicit panel height (or shared `height`)
takes precedence over that panel's aspect ratio.

### Run the preview

The editor and tabs initialize when the playground scrolls near the viewport. The
**Run code** button creates the preview the first time it is clicked; later clicks
reload it.
