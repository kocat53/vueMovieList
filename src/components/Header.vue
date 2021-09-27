<template>
    <div class="container-md p-3">
        <header class="d-flex align-items-center">
            <Logo />
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
import Logo from '~/components/Logo'

export default {
    components:{Logo},
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
