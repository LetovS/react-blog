import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['dist', 'node_modules'] }, // Игнорируемые файлы и папки
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Применять правила к JS и TS файлам
    languageOptions: {
      ecmaVersion: 2020, // Версия ECMAScript
      globals: globals.browser, // Глобальные переменные браузера
      parser: tsParser, // Парсер для TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Поддержка JSX
        sourceType: 'module', // Использование модулей
        project: './tsconfig.json', // Путь к tsconfig.json
      },
    },
    settings: { react: { version: '18.3' } }, // Версия React
    plugins: {
      react, // Плагин для React
      'react-hooks': reactHooks, // Плагин для React Hooks
      'react-refresh': reactRefresh, // Плагин для React Fast Refresh
      '@typescript-eslint': tsPlugin, // Плагин для TypeScript
    },
    rules: {
      ...js.configs.recommended.rules, // Базовые правила ESLint
      ...react.configs.recommended.rules, // Рекомендуемые правила для React
      ...react.configs['jsx-runtime'].rules, // Правила для JSX Runtime
      ...reactHooks.configs.recommended.rules, // Рекомендуемые правила для React Hooks
      ...tsPlugin.configs.recommended.rules, // Рекомендуемые правила для TypeScript
      'react/jsx-no-target-blank': 'off', // Отключить конкретное правило
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off', // Отключить требование импорта React
      'react/prop-types': 'off', // Отключить проверку prop-types (используем TypeScript)
    },
  },
];