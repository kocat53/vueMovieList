<template>
    <footer id="footer">
        <Logo />
        <a href="#;" target="_blank">PBP</a>
    </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
    components:{Logo},
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        padding-bottom: 30px;

        .logo {
            margin-right: 0 !important;
            opacity: 0.5;
        }
    }
</style>