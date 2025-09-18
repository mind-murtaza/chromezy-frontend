/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    // @ts-expect-error Vitest augments Vite config with `test`
    test: {
        environment: 'jsdom',
        setupFiles: ['./test-setup.ts'],
        globals: true,
        css: true,
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'test-setup.ts',
                '**/*.d.ts',
                '**/*.config.*',
                'coverage/**',
                '.next/**',
                'out/**',
                'dist/**',
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
            '@/components': path.resolve(__dirname, './components'),
            '@/lib': path.resolve(__dirname, './lib'),
            '@/hooks': path.resolve(__dirname, './hooks'),
            '@/types': path.resolve(__dirname, './types'),
            '@/styles': path.resolve(__dirname, './styles'),
            '@/app': path.resolve(__dirname, './app'),
            '@/public': path.resolve(__dirname, './public'),
        },
    },
});
