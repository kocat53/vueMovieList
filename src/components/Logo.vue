<template>
        <h1 class="logo me-5">
            <router-link to="/" class="fs-3">OMDb.<span class="fs-2">com</span></router-link>
        </h1>
</template>
<style lang="scss" scoped>
    .logo {
        margin-bottom: 0;
        
        > a {
            text-decoration: none;

            > span {
                color: $black;
            }
        }
    }
</style>