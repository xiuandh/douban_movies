<template>
    <div class="search">
        <mt-search ref="sear" v-model="value" placeholder="搜索" autofocus @click.native="change($event)"></mt-search>
    </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'mint-ui'
Vue.use(Search)

export default {
    // name:'search',
    data () {
        return {
            value: 'haha'
        }
    },
    methods: {
        change (e) {
            let text = e.target.innerText
            if( text == '取消' ){
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>

