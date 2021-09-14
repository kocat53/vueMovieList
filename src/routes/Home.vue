<template>
    <HeadlineVue />
    <Search />
    <MovieList />
</template>
<script>
import HeadlineVue from '~/components/Headline'
import Search from '~/components/Search'
import MovieList from '~/components/MovieList'

export default {
    components: {
        HeadlineVue, Search, MovieList
    },
}
</script>