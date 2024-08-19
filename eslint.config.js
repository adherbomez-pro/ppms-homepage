const jsxA11y = require('eslint-plugin-jsx-a11y');

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,vue}'] },

    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'jsx-a11y/alt-text': 'error',
        },
    },
];
