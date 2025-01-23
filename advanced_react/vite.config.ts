import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            styl: {}
        }
    },
    test: {
        environment: "jsdom",
        deps: {
            optimizer: {
                web: {
                    disabled: true,
                },
            },
        },
    }
})
