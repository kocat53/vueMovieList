export default {
    // 플러스인은 install 메소드를 통해 작성하는거임 (공식문소!)
    install(app){
        app.config.globalProperties.$loadImage = src =>{
            return new Promise( resolve => {
                const img = document.createElement('img')
                img.src = src
                img.addEventListener('load',()=>{
                    resolve()
                })
            })
        }
    }
}