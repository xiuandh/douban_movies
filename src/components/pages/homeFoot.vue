<template>
    <div class="foot">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item v-for="(tab,index) in tabs" :key="index" :id="tab.id" @click.native="goto(tab.id)">
                <i class="iconfont" :class="tab.icon" slot="icon"></i>
                {{tab.title}}
            </mt-tab-item>

        </mt-tabbar>
    </div>
</template>
<script>
import Vue from 'vue'
import {Tabbar} from 'mint-ui'
Vue.use(Tabbar)

export default {
    // name:'foot',
    data () {
        return {
            selected:this.$route.name,
            tabs:[
                {
                    title:'首页',
                    id:'Home',
                    icon:'icon-shouye'
                },
                {
                    title:'正在热映',
                    id:'in_theaters',
                    icon:'icon-lianxi'
                },
                {
                    title:'即将上映',
                    id:'coming_soon',
                    icon:'icon-icon01'
                },
                {
                    title:'新片榜',
                    id:'new_movies',
                    icon:'icon-lianxi'
                },
                {
                    title:'TOP250',
                    id:'top250',
                    icon:'icon-wode'
                }
            ]
        }
    },
   methods: {
       goto (id) {
           console.log(this.$route)
           this.$router.push({name:id,params:{city:this.$route.params.city}})
           console.log(this.$router)
       }
   }
}
</script>
<style lang="scss" scoped>
    .foot{
        height:0.6rem;
    }
</style>

