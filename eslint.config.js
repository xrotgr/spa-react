import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint'; // Импортируем TS-инструментарий
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Глобальное игнорирование (аналог .eslintignore)
    ignores: ['dist', 'node_modules'],
  },
  // Базовый конфиг для JS
  js.configs.recommended,
  // Базовый конфиг для TS
  ...tseslint.configs.recommended,
  {
    // 1. Добавляем расширения ts и tsx
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // 2. Используем TS парсер
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json'], // Путь к вашему конфигу TS
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 3. Используем TS-версию правила для неиспользуемых переменных
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^[A-Z_]' },
      ],
    },
  },
  eslintConfigPrettier
);
