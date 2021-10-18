import axios from 'axios'
import { identity } from 'lodash'
import _uniqBy from 'lodash/uniqBy'

const defaultMessage = '영화제목을 입력해주세요.'

export default {
    namespaced : true, // 모듈화로 사용하게 해주는 옵션
    // data 
    state: ()=> ({
        movies : [],
        message : defaultMessage,
        loading : false,
        theMovie: {}
    }), 
    // computed
    getters: {},
    // methods 동기
    // mutations 에서만 state 변경 가능
    mutations: {
        updateState(state, payload){
            // object.key 는 각 객체의 키값을 배열로 만듬
            Object.keys(payload).forEach(key =>{
                state[key] = payload[key]
            })
        },
        resetMovies(state){
            state.movies = []
            state.message = defaultMessage
            state.loading = false
        }
    },
    // methods 비동기
    // 순서 보장 필요 없는것들만 하면 됨
    actions:{
        async searchMovies({state, commit},payload){ // state가 아닌 컨텍스트로 지정
            // 결과 나오기 전에 사용자가 계속 엔터 치는 상황 방지용
            if(state.loading) return

            commit('updateState',{
                message: '',
                loading: true
            })
           try {
                // res 는 result 또는 responsive 의 줄임말임 = 결국 응답에 관련된거, 그게 그거지 
                const res = await _fetchMovie({...payload,page:1})
                const { Search , totalResults } = res.data

                commit('updateState',{
                    // data 객체에 Search 객체 안에 영화 정보가 있는데 거기에 타이틀이랑 imdbID도 있음, 그래서 그 값을 기준으로 중복 제거를 하는거임
                    // 그러나 21.08.31
                    movies: _uniqBy(Search ,'imdbID'),
                })
                

                // 가져오는 갯수 지정
                const total = parseInt(totalResults, 10) // parsInt는 문자-> 숫자
                // 파스인트의 두번쨰 값은 문자열을 읽을 진법(수의 진법 체계의 진법)
                const pageLength = Math.ceil(total / 10) //ceil = 올림처리
                
                // 추가요청
                if(pageLength > 1){
                    for (let page = 2; page <= pageLength; page +=1){
                        if (page > (payload.number/10)) break
                        const res = await _fetchMovie({
                            ...payload,
                            page
                        })

                        const { Search } = res.data 
                        commit('updateState',{
                            movies: [
                                ...state.movies,
                                ..._uniqBy(Search ,'imdbID')
                            ]
                        })
                    }
                }
           } catch (message) {
               commit('updateState',{
                   movies: [],
                   message
               })
           } finally {
                commit('updateState',{
                    loading: false
                })
           }
        },
        //  영화 상세 페이지
        async searchMovieID({state, commit}, payload){ 
            if(state.loading) return

            commit('updateState',{
                theMovie: {},
                loading: true
            })

            try {
                const { data } = await _fetchMovie(payload)
                
                commit('updateState',{
                    theMovie: data
                })
            } catch (error) {
                commit('updateState',{
                    theMovie: {}
                })
            } finally {
                commit('updateState',{
                    loading: false
                })
            }
        }
    },
}

function _fetchMovie(payload){ // 언더바는 현재 파일에서만 사용된다는걸 의미
    const API_KEY = 'f5a1f5da'
    const { title, type, year, page, id} = payload
    const url = id 
        ? `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        : `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&tpye=${type}&y=${year}&page=${page}`

    return new Promise((resolve, reject)=>{
        axios.get(url)
        .then(res =>{
            if(res.data.Error){
                return reject(res.data.Error)
            }
            resolve(res)
        }).catch(err =>{
            reject(err.message)
        })
    })
}