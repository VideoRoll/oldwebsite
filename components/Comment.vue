<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 12:35:30
-->
<template>
    <div class="comment">
        <n-carousel
            effect="card"
            :centered-slides="true"
            slides-per-view="auto"
            draggable
            autoplay
            loop
            style="height: 300px; width: 60%"
        >
            <n-carousel-item
                v-for="item in list"
                :key="item.key"
                :style="{ width: '60%' }"
            >
                <div class="comment__item">
                    <div class="comment__head">
                        <n-avatar round size="large" :src="item.img" />
                        <div>{{ item.name }}</div>
                    </div>
                    <div class="comment__content">
                        <p>{{ item.content }}</p>
                    </div>
                    <div class="comment__rate">
                        <n-rate readonly :default-value="5" />
                    </div>
                </div>
            </n-carousel-item>
        </n-carousel>
    </div>
</template>

<script>
import {
    NCard,
    NCarousel,
    NCarouselItem,
    NIcon,
    NAvatar,
    NRate,
} from "naive-ui";
import { Pricetags } from "@vicons/ionicons5";
export default defineComponent({
    name: "Comment",
    setup() {
        const list = computed(() => [
            {
                name: "Артемий Фаст",
                key: "0",
                content:
                    "Probably the best extension I've ever installed, thank you",
                img: "/img/Артемий Фаст.png",
            },
            {
                name: "言川",
                key: "1",
                content: "体验最完美的旋转工具",
                img: "/img/言川.png",
            },
            {
                name: "Birdy",
                key: "2",
                content: "感谢，可以愉快的学习了。",
                img: "/img/Birdy.jpg",
            },
            {
                name: "Gabriel Lam",
                key: "3",
                content:
                    "95% of perfect creating, if other function can be easy click like rotater that would be completely perfect ^^",
                img: "/img/Gabriel Lam.png",
            },
            {
                name: "jesee Smith",
                key: "4",
                content: "B站能用，好评",
                img: "/img/jesee Smith.png",
            },
            {
                name: "SepNero Zhang",
                key: "5",
                content:
                    "你他吗的是怎么做出这么吊的东西啊！！！！太好用了，激动地跺jiojio！！！",
                img: "/img/SepNero Zhang.png",
            },
            {
                name: "Vampirzone",
                key: "6",
                content: "非常好用的一款插件，请问能不能出一个firefox的版本？",
                img: "/img/Vampirzone.png",
            },
            {
                name: "安澜洪",
                key: "7",
                content: "太棒了，YouTube上很有用，全屏问题的也解决了，赞",
                img: "/img/安澜洪.jpg",
            },
        ]);
        return {
            list,
        };
    },
    components: {
        NCard,
        NCarousel,
        NCarouselItem,
        NIcon,
        NAvatar,
        NRate,
        Pricetags,
    },
});
</script>

<style lang="less">
.comment {
    display: flex;
    justify-content: center;
    padding: 0 80px;
    .n-carousel__dot--active {
        background-color: var(--roll-primary-color) !important;
    }
}

.comment__item {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: linear-gradient(
        to top,
        var(--roll-background-color) 0%,
        rgba(0, 0, 0, 0.9) 100%
    );
    backdrop-filter: blur(8px);
    color: var(--roll-defaut-font-color);
}

.comment__head {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    font-weight: bold;
}

.comment__content,
.comment__rate {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 60px;
    box-sizing: border-box;
}
</style>
