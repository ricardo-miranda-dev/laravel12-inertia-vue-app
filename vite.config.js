import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        host: true, // hace que 0.0.0.0 se use automáticamente
        port: 5173,
        strictPort: true,
		watch: {
        usePolling: true,
        interval: 100, // milisegundos
		},
        hmr: {
            protocol: 'ws',   // WebSocket
            host: 'localhost', // o la IP de tu host si es necesario
            port: 5173,
        },
    },
})