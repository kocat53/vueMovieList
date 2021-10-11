<template>
    <div class="container">
        <template v-if="loading">
            <div class="skeletons">
                <div class="poster"></div>
                <div class="specs">
                    <div class="title"></div>
                    <div class="spec"></div>
                    <div class="plot"></div>
                    <div class="etc"></div>
                    <div class="etc"></div>
                    <div class="etc"></div>
                </div>
            </div>
            <Loader fixed :size="4" />
        </template>
        <div v-else class="movie-details">
            <div class="poster">
                <div class="img_poster" :style="{backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})`,}">
                <h2 class="blind">영화 {{ theMovie.Title }}</h2>
                <Loader v-if="imageLoading" absolute />
            </div>
            </div>
            <div class="specs">
                <h2 class="title h1">{{ theMovie.Title}}</h2>
                <div class="labels">
                    <p>{{theMovie.Released }}</p>
                    <p>{{theMovie.Runtime }}</p>
                    <p>{{theMovie.Country }}</p>
                </div>
                <div class="plot">
                    <p>{{theMovie.Plot}}</p>
                </div>
                <div class="ratings">
                    <h3>Ratings</h3>
                    <div class="d-flex">
                        <span v-for="{ Source:src, Value:score },i in theMovie.Ratings" :key="i" :class="i>0 ? 'ms-5':''">
                            <img :src="`https://github.com/ParkYoungWoong/vue3-movie-app/blob/master/src/assets/${src}.png?raw=true`" height="35" :alt="src" :title="src">
                            <span class="ms-2">{{ score }} </span>
                        </span>
                    </div>
                </div>
                <div class="actors">
                    <h3>Actors</h3>
                    <p>{{theMovie.Actors}}</p>
                </div>
                <div class="directors">
                    <h3>Directors</h3>
                    <p>{{theMovie.Director}}</p>
                </div>
                <div class="productions">
                    <h3>Production</h3>
                    <p>{{theMovie.Production}}</p>
                </div>
                <div class="genre">
                    <h3>genre</h3>
                    <p>{{theMovie.Genre}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loader from '~/components/Loader.vue';
export default {
    components: { Loader },
    data() {
        return {
            imageLoading: true
        }
    },
    computed: {
        theMovie() {
            return this.$store.state.movie.theMovie 
        },
        loading(){
            return this.$store.state.movie.loading
        }
    },
    created () {
        this.$store.dispatch('movie/searchMovieID',{
            id: this.$route.params.id
        })
    },
    methods: {
        requestDiffSizeImage(url, size=800) {
            if(!url || url === 'N/A') {
                this.imageLoading = false
                return ''
            }
            const src = url.replace('SX300',`SX${size}`)
            // 이미지 로딩 기다리지 않고 바로 반환이 되게 하기위함임
            this.$loadImage(src).then(()=>{
                this.imageLoading = false
            })
            return src
        }
    },
}
</script>
<style lang="scss" scoped>
    @import "~/scss/main";
    .container {
        padding-top: 40px;
    }
    // 스켈레톤
    .skeletons {
        display: flex;

        div {
            background-color: #eee;
            border-radius: 10px;
        }

        .poster {
            flex: 0 0 auto;
            max-width: 500px;
            width: 100%;
            height: 500px * 3 /2;
        }

        .specs {
            background-color: transparent;
            flex: 1 0 auto;
            margin-left: 40px;

            div {
                &.title {
                    width: 60%;
                    height: 60px;
                }

                &.spec {
                    width: 35%;
                    height: 30px;
                }

                &.plot {
                    height: 180px;
                    width: 70%;
                }

                &.etc {
                    height: 40px;
                    width: 40%;
                }

                + div {
                    margin-top: 20px;
                }
            }
        }
    }
    // 영화정보
    .movie-details {
        display: flex;
        color: $gray-600;

        .poster {
            background-color: $gray-400;
            margin-right: 70px;
            border-radius: 15px;
            

            .img_poster {
                position: relative;
                $width : 600px;
                width: $width;
                height: $width * 3 / 2;
                background-size: cover;
                background-position: center;
                border-radius: 15px;
                overflow: hidden;
            }
        }
        
        .specs {
            .plot {
                ~ div {
                    margin-top: 24px;
                }
            }
        }

        .title {
            color: $black;
        }

        .labels {
            display: flex;
            align-items: center;

            > p {
                color: $primary;
                
                &:before {
                    content: '\00b7';
                    margin-right: 5px;
                }

                + p {
                    margin-left: 15px;
                
                }
            }
        }

        h3 {
            color: $black;
        }
    }
</style>