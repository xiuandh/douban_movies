<template>
    <div class="top">
        <mt-header title="电影资讯网" fixed>
            <router-link to="/city" slot="left">
                <mt-button>[{{currentCity}}]</mt-button>
            </router-link>
            <mt-button slot="right" @click="search">
                <i class="iconfont icon-wode" slot="icon"></i>
            </mt-button>
        </mt-header>
        

        <mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,idx) in items" :key="idx" :style="{'background-image':'url('+item.images.large+')'}">
				<!-- <img :src="item.images.large"/> -->
			</mt-swipe-item>
		</mt-swipe>

		<ul class="datalist flexlist">
			<li v-for="(item,index) in datalist" :key="index">
				<img :src="item.images.small" />
				<h4>{{item.title}}</h4>
			</li>
		</ul>
    </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui'
Vue.use(Mint)

export default {
    
    //拿city页传回来的参数
    props:['city'],
    data (){
        return {
            items: [],
            datalist :[],
            keyword: '碟中谍6',
            currentCity: this.city || '广州'
        }
    },
    watch: {
        currentCity () {
            this.getMovie()
        }
    },
    created () {
        this.getMovie()
    },

    methods: {
        //手动跳转路由进入search.vue
        search () {
            this.$router.push({name:'search'})
        },
        getMovie () {
            console.log(this.$route)
            this.$http.post('/api/in_theaters',{
                city: this.currentCity.replace(/市$/,''),
                count: 10,
                apikey:'0b2bdeda43b5688921839c8ecb20399b'
            }).then(res=>{
                console.log(res.data);
                let data = res.data;
                //得到底部的栏目数据
                this.datalist = data.subjects;
                // console.log(this.datalist)
                this.items = data.subjects.slice(0).sort((a,b)=>{
                    return a.collect_count-b.collect_count
                }).slice(0,3);
                console.log(this.items)
            })
        }
    }
}   
</script>
<style lang="scss" scoped>
    .mint-swipe{height:200px;}
</style>

