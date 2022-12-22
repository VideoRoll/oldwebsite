<template>
    <div class="describe">
        <!-- <Title title="Features"></Title> -->
        <n-grid x-gap="54" :y-gap="34" :cols="3">
            <n-gi v-for="item in list" :key="item.key">
                <n-card size="huge" embedded>
                    <div class="describe-item">
                        <n-icon size="16" class="describe-icon">
                            <Pricetags />
                        </n-icon>
                        <span>{{ item.title }}</span>
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script>
import { NCard, NGrid, NGi, NIcon } from "naive-ui";
import { Pricetags } from "@vicons/ionicons5";
export default defineComponent({
    name: "Describe",
    setup() {
        const list = computed(() => [
            {
                title: "Rotate",
                key: "0",
                content: "rotate any html5 video",
            },
            {
                title: "Zoom",
                key: "1",
                content: "rotate any html5 video",
            },
            {
                title: "Move",
                key: "2",
                content: "rotate any html5 video",
            },
            {
                title: "Scale",
                key: "3",
                content: "rotate any html5 video",
            },
            {
                title: "Flip",
                key: "4",
                content: "rotate any html5 video",
            },
            {
                title: "Filter",
                key: "5",
                content: "rotate any html5 video",
            },
        ]);
        return {
            list,
        };
    },
    components: {
        NCard,
        NGrid,
        NGi,
        NIcon,
        Pricetags,
    },
});
</script>

<style lang="less">
.describe {
    width: 100%;
    padding: 0 80px;
    box-sizing: border-box;
}

.describe-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;

    .describe-icon {
        margin-right: 10px;
    }
}
</style>
