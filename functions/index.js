exports.handler = async function (event, context) {
    return {
        statusCode : 200,
        // body moon자만 입력이 가ㅇㅐㅓ 제이ㄴ 써야 함
        body: JSON.stringify({
            name: 'park',
            age: 10,
            email: 'test@naver.com'
        })
    }
}