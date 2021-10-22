module.exports = {
    // 테스트에서도 확장자를 명시하지 않은 파일을 읽을때 문제가 안되게 확장자 처리 하는 것
    // 일반적으로 많이 사용되는 모듈의 확장자를 지정
    // ex) 임포트 할때 마지막에 확장자 안붙이는 그거 생각 하면 됨
    moduleFileExtensions: [
        'js','vue'
    ],
    // ~ 같은 경로 별칭을 매핑
    // rootdir 토큰을 사용해서 루트 경로를 참조 가능
    // ex ) 아래의 뜻은 ~ 의 경로 별칭은  ~ : src에서 시작하라~! 라고 명시했다고 보면 됨
    moduleNameMapper: {
        '^~(.*)$' : '<rootDir>/src/$1'
    },

    // 일치하는 경로에서는 모듈을 가져오지 않음
    // 예외처리
    modulePathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/dist'
    ],

    // Jsdom 환경에 대한 URL 설정, 
    // Jest도 결국엔 화면을 그려야 하니 html을 보여야 할 주소가 필요한것
    testURL: 'http://localhost',

    // 정규식과 일치하는 파일의 변환 모듈을 지정
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    }
}