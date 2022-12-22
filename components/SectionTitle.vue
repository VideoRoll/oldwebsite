<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2022-12-22 21:51:57
-->
<template>
    <div class="section__title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default defineComponent({
    name: "SectionTitle",
    props: {
        title: String,
    },
    setup() {},
});
</script>

<style lang="less">
.section__title {
    text-align: center;
    padding: 40px 80px;
    color: var(--roll-defaut-font-color);

    h2 {
        font-size: 2rem;
    }
}
</style>
