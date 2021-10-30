import { asyncFn } from './example'
import { mount } from '@vue/test-utils'
import * as example from './example' // example.someThing 과 같이 객체 형태로 쓰려면 이렇게 가져오면 됨
import 'regenerator-runtime' // 이거 있어야 하네???
import TestVue from './TestVue'

// 테스트도 오래 걸리면 안됨. 시간을 단축 할 수록 테스트도 좋음 그럴려면 코드를 잘 짜야지 ^ㅁ^?
// 비동기를 테스트 할때 정상적으로 하는 방법
describe('비동기 테스트',()=>{
    // 1. 비동기 테스트는 언제 종료가 되는지 알려주는 매개변수를 이용해서 설정 가능
    // test('done', (dn) =>{ 
    //     asyncFn().then( res => {
    //         expect(res).toBe('끄읕')
    //         dn()
    //     })
    // })

    // 2. 리턴
    // test('return', ()=>{
    //     return asyncFn().then( res => {
    //         expect(res).toBe('끄읕')
    //     })
    // })
    
    // 3. resolves
    // test('return', ()=> expect(asyncFn()).resolves.toBe('끄읕'))
    
    // 4. async/await
    test('asyncs', async()=>{
        // 모의(mock) 함수를 만든 것
        jest.spyOn(example, 'asyncFn').mockResolvedValue('끄읕333') 
        
        const res = await example.asyncFn()
        expect(res).toBe('끄읕333')
    })
})