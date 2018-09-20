<template>
    <div class="cityLists">
        <mt-header title="选择城市">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<mt-index-list>
		  <mt-index-section :index="index" v-for="(citylist,index) in indexCity" v-if="citylist.length>0" :key="index">
		    <mt-cell v-for="city in citylist" :key="city.id" :title="city.name" @click.native="setCurrentCity(city.name)"></mt-cell>
		  </mt-index-section>
		</mt-index-list>
    </div>
</template>
<script>
export default {
    data () {
        return {
            indexCity: []
        }
    },
    methods: {
        setCurrentCity (city) {
            //  点击选定城市列表的时候，跳转路由到主页，顺便带入city参数
                //  那么首页路由需要设置props:true拿到$route，js设置prop:['city']拿参数
            this.$router.push({name:'Home',params:{city}})
        }
    },
    created () {
        this.$http.get('static/mock/region.json').then(res=>{
            let data = res.data
            let indexCity = {}

            //以字母作为属性写入对象indexCity
            'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').forEach(letter=>{
                indexCity[letter] = []
            });

            //筛选获得城市名
            function getCity (items) {
                for(let item of items){
                    if( item.id%10000 === 0 ){
                        //直辖市，特别行政区
                        if( item.municipality || item.special ) {
                            addCity(item)
                        }else{
                            //省份进入递归调用
                            getCity(item.regions)
                        }
                    }else{
                        //城市处理
                        addCity(item)
                    }
                }
            }

            //把城市的信息添加到indexCity
            function addCity(item) {
                let { id,name,pinyin } = item
                indexCity[ item.pinyin[0] ].push({
                    id,name,pinyin
                })
            }

            getCity(data.regions)

            this.indexCity = indexCity
            console.log(this.indexCity);
        })
    }
}
</script>
<style lang="scss" scoped>

</style>

