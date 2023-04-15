<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 12:35:30
-->
<template>
    <div class="head__left">
        <img class="logo__text" src="~/assets/img/text.png" />
    </div>
    <div class="head__right">
        <NMenu class="head__pcMenu" v-model:value="activeKey" mode="horizontal" :options="options" />
        <div class="head__mobileMenu">
            <n-button text @click="showMenu">
                <template #icon>
                    <n-icon size="20" class="menu-icon">
                        <MenuOutline />
                    </n-icon>
                </template>
            </n-button>
        </div>
    </div>
</template>

<script>
import { NButton, NMenu, NIcon } from "naive-ui";
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
    name: "Header",
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
.head__left {
    width: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .logo__text {
        display: none;
        height: 16px;
    }
}

.head__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: #fff;
}

.head__mobileMenu {
    display: none;
    align-items: center;
}

.head__pcMenu.n-menu.n-menu--horizontal {
    display: none;
    align-items: center;
}

.head__verticalMenu {
    position: fixed;
    animation: showMenu 0.4s ease-in-out;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(5px);
    background-color: rgba(24, 24, 28, 0.8);
}

@keyframes showMenu {
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
}

@media screen and (max-width: 1200px) {
    .head__mobileMenu {
        display: flex;
    }
}

@media screen and (min-width: 1200px) {
    .head__pcMenu.n-menu.n-menu--horizontal {
        display: flex;
    }

    .head__verticalMenu {
        display: none;
    }
}


@media screen and (min-width: 600px) {
    .head__left .logo__text {
        display: block;
    }
}
</style>
