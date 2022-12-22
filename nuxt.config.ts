/*
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-21 22:08:06
 */
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Video Roll',
            link: [
                { rel: 'shortcut icon', href: '/favicon.png' },
            ],
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Better watching by rolling' }
            ],
            noscript: [
                // <noscript>Javascript is required</noscript>
                { children: 'Javascript is required' }
            ]
        }
    },
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