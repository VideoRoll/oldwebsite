<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 12:35:30
-->
<template>
    <div class="copy-right">Copyright © 2022-2023 Video Roll </div>
</template>

<script>
import { NIcon } from "naive-ui";
import { MenuOutline } from "@vicons/ionicons5";
import { watch } from 'vue';
export default defineComponent({
    props: {
        options: {
            type: Array,
            default: []
        },
        showMenu: {
            type: Function
        },
        value: {
            type: String
        }
    },
    name: "Footer",
    emits: ['update:value'],
    setup(props, { emit }) {
        const activeKey = ref(props.value);

        watch(activeKey, (val) => {
            emit('update:value', val);
        });

        watch(() => props.value, (val) => {
            activeKey.value = val;
        });
        
        return {
            activeKey
        };
    },
    components: {
        NButton,
        NMenu,
        NIcon,
        MenuOutline
    },
});
</script>

<style lang="less">

</style>
