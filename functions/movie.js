const axios = require('axios') // 서버리스 함수는 노드 js 기반이라 리콰이어로 불러야 함
const { OMDB_API_KEY } = process.env

exports.handler = async function(event) {
    const payload = JSON.parse(event.body)
    const { title, type, year, page, id} = payload
    const url = id 
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&tpye=${type}&y=${year}&page=${page}`

    try {
        const { data } = await axios.get(url)
        if(data.Error){
            return {
                statusCode : 400, // 잘못된 요청에 대한 에러 = 400
                body: data.Error
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data) // body는 문자만 넘길수 있어서 객체 형태를 문자형태로 변환해서 보내는 것
        }
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }
}