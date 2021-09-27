<template>
    <div class="container">
        <div class="skeletons">
            <div class="poster"></div>
            <div class="sepcs">
                <div class="title"></div>
                <div class="spec"></div>
                <div class="plot"></div>
                <div class="etc"></div>
                <div class="etc"></div>
                <div class="etc"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container {
        padding-top: 40px;
    }

    .skeletons {
        display: flex;

        div {
            background-color: #eee;
            border-radius: 10px;
        }

        .poster {
            max-width: 500px;
            width: 100%;
            height: 500px * 3 /2;
        }

        .specs {
            flex: 1;
            div {}
        }
    }
</style>