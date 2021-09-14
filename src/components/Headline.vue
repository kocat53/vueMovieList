<template>    
    <h2>
        OMDb API <span>THE OEPN MOVIE <br> DATABASE</span>
    </h2>
    <p class="mt-4">The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. </p>
</template>
<style lang="scss" scoped>
    @import '~/scss/main';

    h2 {
        line-height: 1;
        color: $primary;
        font-size: 60px;
        
        > span {
            display: block;
            color: #000;
        }
    }

    p {
        color: $gray-600;
    }
</style>