import { createRouter, createWebHashHistory} from "vue-router";
import Home from './Home'
import About from './About'
import Movie from './Movie'
import Notfound from "./NotFound";

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
            // : 를 이용해서 파람스를 셋팅할 수 있음 ex ) : 파람명
            path : '/movie/:id',
            component: Movie
        },
        {
            path:'/:notFound(.*)',
            component: Notfound
        }
    ]
})