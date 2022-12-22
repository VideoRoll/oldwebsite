<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-21 22:19:28
-->
<template>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
        <NuxtLayout>
            <template #body-box>
                <NuxtPage />
            </template>
        </NuxtLayout>
    </n-config-provider>
</template>

<script lang="ts">
import { NConfigProvider, darkTheme } from "naive-ui";
export default defineComponent({
    setup() {
        const themeOverrides = {
            common: {
                primaryColor: "#a494c6",
                primaryColorHover: "#a494c6",
            },
            // ...
        };
        return {
            darkTheme,
            themeOverrides,
        };
    },
    components: {
        NConfigProvider,
    },
});
</script>
<style>
.n-config-provider {
    height: 100vh;
}
</style>
