import { createRouter, createWebHashHistory} from "vue-router";
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createRouter({
    // hash , history 두가지 모드가 있음
    history : createWebHashHistory(),
    // 실제 페이지
    routes: [
        {
            path :'/',
            component: Home
        },
        {
            path : '/about',
            component: About
        },
        {
            path : '/movie',
            component: Movie
        },
    ]  
})