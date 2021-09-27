<template>
    <div class="container">
        <div class="inner" :class="{'no-result':!computedMovies.length}">
            <div v-if="loading" class="spinner-border text-center text-primary"></div>
            <div v-if="message" class="text-center">
                <strong class="gray-200">{{ message }}</strong>
            </div>
            <div v-else class="movies">
                <movie-item 
                    v-for="item in computedMovies" 
                    :key="item.imdbID"
                    :movie="item"
                ></movie-item>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieItem from '~/components/MovieItem.vue'
    export default {
        components: { MovieItem },
        data() {
            return {
                movies: []
            }
        },
        computed: {
            // movies를 computed로 사용하는 이유
            // => 그냥 쓰면 빈 배열이 들어가기 때문에 store의 액션을 맥인 값이 들어가려면
            // 컴퓨티드 사용해야함
            computedMovies() {
                return this.$store.state.movie.movies
            },
            message(){
                return this.$store.state.movie.message
            },
            loading(){
                return this.$store.state.movie.loading
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
    margin-top: 30px;

    .inner {
        display: flex;
        justify-content: center;
        background-color: #eee;
        padding: 10px 0;
        border-radius: 4px;

        &.no-result {
            padding: 80px 0;
        }
    }
}

.message {
    font-size: 20px;
    color: $gray-400;
}

.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>