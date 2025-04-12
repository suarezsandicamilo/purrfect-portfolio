//

import js from '@eslint/js';
import globals from 'globals';
import react_hooks from 'eslint-plugin-react-hooks';
import react_refresh from 'eslint-plugin-react-refresh';
import typescript from 'typescript-eslint';

export default typescript.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...typescript.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': react_hooks,
      'react-refresh': react_refresh,
    },
    rules: {
      ...react_hooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
