export function asyncFn(){
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('끄읕')
        }, 2000);
    })
}