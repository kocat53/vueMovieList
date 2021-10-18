<template>
    <router-link :to="`/movie/${movie.imdbID}`" class="movie" :title="movie.Title" :style="{backgroundImage: `url(${movie.Poster})`}">
        <Loader v-if="imageLoading" :size="1.5" absolute />
        <div class="info">
            <div class="year">{{movie.Year}}</div>
            <strong class="title">{{movie.Title}}</strong>
        </div>
    </router-link>
</template>

<script>
import Loader from '~/components/Loader.vue'
    export default {
  components: { Loader },
        props: {
            movie: {
                type: Object,
                default: ()=>({})
            },
        },
        data() {
            return {
                imageLoading: true
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            async init() {
                const poster = this.movie.Poster

                if (!poster || poster === 'N/A') {
                    this.imageLoading = false 
                    return ''
                }

                await this.$loadImage(this.movie.Poster)
                this.imageLoading = false
            }
        },
    }
</script>

<style lang="scss" scoped>
    .movie {
        position: relative;
        $width: 200px;

        position: relative;
        width: $width;
        height: $width * 3 / 2;
        margin: 10px;
        border-radius: 4px;
        background-color: $gray-400;
        background-size: cover;
        overflow: hidden;
        cursor: pointer;

        &:before, 
        &:after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: '';
            border-radius: 4px;
        }

        &:before {
            border: 1px solid rgba(#000,.09);
        }

        &:hover {
           &:after {
                border: 6px solid $primary;
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