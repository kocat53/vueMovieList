<template>
    <div class="not_found">
        <h1 class="display-2"><b>404</b></h1>
        <p>번지수를 잘못 찾으셨습니다 ^ㅁ^</p>
        <router-link :to="'/'">차 돌리기</router-link>
    </div>
</template>

<script>
    export default {
        created () {
        },
    }
</script>

<style lang="scss" scoped>
    .not_found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        h1 {
            color: $primary;
        }
    }
</style>