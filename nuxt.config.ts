/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-21 22:08:06
 */
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        },
        server: {
            https: true
        }
    }
})