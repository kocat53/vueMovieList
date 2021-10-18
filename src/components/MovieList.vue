<template>
    <div class="container">
        <div class="inner" :class="{'no-result':!movies.length}">
            <Loader v-if="loading" :size="3" absolute/>
            <div v-if="message" class="text-center">
                <strong class="gray-200">{{ message }}</strong>
            </div>
            <div v-else class="movies">
                <movie-item 
                    v-for="item in movies" 
                    :key="item.imdbID"
                    :movie="item"
                ></movie-item>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MovieItem from '~/components/MovieItem'
    import Loader from '~/components/Loader'
    export default {
        components: {
            MovieItem,
            Loader
        },
        computed: {
            ...mapState('movie',[
                'movies',
                'message',
                'loading'
            ]),
            // movies를 computed로 사용하는 이유
            // => 그냥 쓰면 빈 배열이 들어가기 때문에 store의 액션을 맥인 값이 들어가려면
            // 컴퓨티드 사용해야함
        },
    }
</script>

<style lang="scss" scoped>
.container {
    margin-top: 30px;

    .inner {
        position: relative;
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