<template>
    <div class="row">
        <div class="col-md-5 col-sm-12">
            <input v-model="title" @keyup.enter="apply()" class="form-control" placeholder="영화명을 입력하세요" type="text" name="" id="">    
        </div>
        <div class="col-md-2 col-sm-3" v-for="(filter , i) in filters" :key="i">
            <select
                v-model="$data[filter.name]" 
                class="form-select"> <!-- $data 는 script에 있는 data라고 보면됨. 이런식으로 접근 가능 -->
                <option v-if="filter.name ==='year'" value="">All</option>
                <option v-for="(item,j) in filter.items" :key="j">
                    {{item}}
                </option>
            </select>
        </div>
        <div class="col-md-1 col-sm-3">
            <button class="btn  btn-primary" @click="apply()">Apply</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            title:'',
            type:'movie', // 1번 데이터
            number: 10, // 2번 데이터 
            year: '', // 3번 데이터
            filters: [
                {
                    name: 'type', // 1번 데이터
                    items: ['movie','series','episode']
                },
                {
                    name: 'number', // 2번 데이터
                    items: [10,20,30]
                },
                {
                    name: 'year', // 2번 데이터 TIP : $data를 이용해서 이런식으로도 for문에 접근이 가능하구나
                    items: (()=>{
                        const years = [] //1. 빈 배열을 셋팅하구
                        const thisYear = new Date().getFullYear() //2. 기준이 되는 값을 자동으로 구하게 Date객체를 이용함
                        for(let i = thisYear; i >= 1985; i-= 1){ // 3. 배열에 넣어서 쓴다
                            years.push(i)
                        }
                        return years
                    })() // 즉시 실행 함수를 이용해서 스크립트로 데이터를 만들 수 있구나 ㅇㅅㅇ...
                }
            ]
        }
    },
    methods: {
        async apply() {
            this.$store.dispatch('movie/searchMovies',{
                title: this.title,
                type: this.type,
                year: this.year,
                number: this.number,
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    select {
   
        flex-shrink: 1;
    }
</style>