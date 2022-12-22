<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-21 23:21:14
-->
<template>
    <div class="page-box">
        <div class="header-box">
            <Header></Header>
        </div>
        <div class="body-box">
            <slot name="body-box" />
        </div>
    </div>
</template>
<script></script>

<style lang="less">
html,
body {
    --roll-primary-color: #a494c6;
    --roll-defaut-font-color: #fff;
    --roll-background-color: #18181c;

    margin: 0;
    padding: 0;
    background-color: var(--roll-background-color);
    height: 100%;

    ::-webkit-scrollbar {
        width: 0.4em;
        height: 0.6em;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(155, 155, 155, 0.4);
        border-radius: 0.6em;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(155, 155, 155, 0.6);
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        // background: rgba(200, 200, 200, 0.2);
    }
}

#__nuxt {
    min-height: 100vh;
}
.page-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header-box {
    width: 100%;
    height: 80px;
    padding: 0 80px;
    position: fixed;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(5px);
    background-color: rgba(24, 24, 28, 0.1);
    z-index: 2;
}
.body-box {
    width: 100%;
    height: 100%;
    flex: 1;
}
</style>
