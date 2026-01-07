# Environment variables

For the project to work correctly you need an environment file.

1) Create a [.env](.env) file in the project root with at least:

```dotenv
VITE_BASE_URL="https://dulces-petalos.jakala.es"
VITE_API_VERSION="1"
```

2) Load it in your current terminal session:

```bash
source .env
```

Note: Vite reads the [.env](.env) file automatically when running `npm run dev` / `npm run build`. Running `source .env` is useful when you also want these variables available in your shell (for example, if you run scripts that rely on them).



# Scripts

This project uses standard Vite scripts via npm:

### Development (HMR)

Start the dev server:

```bash
npm run dev
```

### Lint

Run ESLint over the whole project:

```bash
npm run lint
```

### Build (compile)

Create a production build:

```bash
npm run build
```

This runs TypeScript compilation (`tsc -b`) and then builds the app with Vite (`vite build`). The output is written to `dist/`.

### Preview production build

Serve the built app locally:

```bash
npm run preview
```


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Tailwind 

Tailwind CSS is a **utility-first** CSS framework: instead of writing many custom CSS rules, you compose small utility classes directly in your markup (e.g. spacing, colors, typography, layout). This usually makes styling faster, more consistent, and easier to refactor because styles live close to the components they affect.

In this project Tailwind is already integrated with Vite using the official plugin:

- The Vite plugin is enabled in `vite.config.ts` via `@tailwindcss/vite`.
- Tailwind is loaded through the main stylesheet in `src/index.css` with:

```css
@import "tailwindcss";
```

### Usage

Use Tailwind classes in your React components with `className`:

```tsx
export function Example() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg">
      <h1 className="text-2xl font-semibold">Hello Tailwind</h1>
      <p className="mt-2 text-sm text-gray-600">
        Utility classes are composed directly in JSX.
      </p>
    </div>
  )
}
```

### Customization

If you need to customize the design system (theme tokens, custom utilities, etc.), you can add a Tailwind config file and extend the defaults. For many projects, the default utilities are enough to get started without extra configuration.


