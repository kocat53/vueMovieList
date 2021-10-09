<template>
   <header id="header" class="d-flex  container-md p-3align-items-center">
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
                    href: '/movie/tt2294629'
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
