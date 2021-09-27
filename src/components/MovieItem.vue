<template>
    <div class="movie" :title="movie.Title" :style="{backgroundImage: `url(${movie.Poster})`}">
        <div class="info">
            <div class="year">{{movie.Year}}</div>
            <strong class="title">{{movie.Title}}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/scss/main";
    .movie {
        $width: 200px;

        position: relative;
        width: $width;
        height: $width * 3 / 2;
        margin: 10px;
        border-radius: 4px;
        background-color: $gray-400;
        background-size: cover;
        overflow: hidden;

        &:hover {
           &:after {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 6px solid $primary;
                content: '';
           }
        }

        .info {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            text-align: center;
            padding: 10px;
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter:blur(3px);
            background-color: rgba(#000,.3);

            .year {
                color: $primary;
            }

            .title {
                display: block;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #fff;
            }
        }
    }
</style>