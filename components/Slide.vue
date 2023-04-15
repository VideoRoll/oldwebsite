<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 12:35:30
-->
<template>
    <div class="slide">
        <div class="slide__mask"></div>
        <div class="slide__left">
            <div class="slide__logo">
                <img class="logo" src="~/assets/img/logo.png" />
            </div>

            <n-gradient-text class="video-roll-text" type="info" :gradient="{ from: '#ffffff', to: '#bb62a4', deg: 45 }">
                Video Roll
            </n-gradient-text>
            <p class="video-roll-desc">Easily enhance your video watching experience</p>
        </div>
    </div>
</template>

<script>
import { NGradientText } from "naive-ui";
export default defineComponent({
    name: "Slide",
    setup() {
        const gradient = {};
        return {};
    },
    components: {
        NGradientText,
    },
});
</script>

<style lang="less">
.slide {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/img/bg.png") no-repeat;
    background-size: cover;
}

.slide__logo {
    .logo {
        width: 200px;
        height: 200px;
    }
}


.slide__mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    background-image: linear-gradient(to top,
            #18181c 0%,
            rgba(0, 0, 0, 0) 100%);
}

.slide__left {
    text-align: center;
    z-index: 1;
}

.video-roll-text {
    font-size: 3.5rem;
    font-weight: bold;
    animation: updown 3s ease-in-out infinite;
    user-select: none;
}

.video-roll-desc {
    font-size: 2.0rem;
    color: #fff;
    user-select: none;
    padding: 0;
    margin: 0;
    text-shadow: 0 0 10px var(--roll-primary-color),
        0 0 20px var(--roll-primary-color), 0 0 50px var(--roll-primary-color),
        0 0 100px var(--roll-primary-color), 0 0 200px var(--roll-primary-color);
}
</style>
