<template>
    <div class="inner">
        <movie-item 
            v-for="item in computedMovies" 
            :key="item.imdbID"
            :movie="item"
            ></movie-item>
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
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>