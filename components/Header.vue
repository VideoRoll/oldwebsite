<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 12:35:30
-->
<template>
    <div class="head__left">
        <img class="logo" src="~/assets/img/logo.png" />
        <img class="logo__text" src="~/assets/img/text.png" />
    </div>
    <div class="head__right">
        <NMenu v-model:value="activeKey" mode="horizontal" :options="options" />
    </div>
</template>

<script>
import { NButton, NMenu } from "naive-ui";
export default defineComponent({
    name: "Header",
    setup() {
        const activeKey = ref("0");
        const options = computed(() => [
            {
                label: "Home",
                key: "0",
                link: "",
            },
            {
                label: "Download",
                key: "1",
                link: "",
            },
            {
                label: "Demo",
                key: "2",
                link: "",
            },
            {
                label: "Donation",
                key: "3",
                link: "",
            },
            {
                label: "Language",
                key: "4",
                link: "",
            },
        ]);
        return {
            activeKey,
            options,
        };
    },
    components: {
        NButton,
        NMenu,
    },
});
</script>

<style lang="less">
.head__left {
    width: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
        width: 30px;
        height: 30px;
    }

    .logo__text {
        height: 16px;
    }
}

.head__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
}
</style>
