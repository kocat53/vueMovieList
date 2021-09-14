<template>
    <div class="container-md p-3">
        <header class="d-flex align-items-center">
            <h1 class="logo me-5">
                <router-link to="/" class="fs-3">OMDb.<span class="fs-2">com</span></router-link>
            </h1>
            <ul class="nav nav-pills">
                <li
                    v-for="(item , i) in navi"
                    :key="i"
                    class="nav-item">
                    <router-link :to="item.href" active-class="active" class="nav-link">
                        {{item.name}}
                    </router-link>
                </li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navi: [
                {
                    name:'Search',
                    href: '/'
                },
                {
                    name:'Movie',
                    href: '/movie'
                },
                {
                    name:'About',
                    href: '/about'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~/scss/main';
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