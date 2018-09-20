<template>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
	    <ul class="movielist">
            <li v-for="list in lists" :key="list.id">
                <img :src="list.images.small">
                <div class="info">
                    <h4>{{list.title}}</h4>
                    <p>主演：{{getNames(list.casts)}}</p>
                </div>
            </li>
	    </ul>
    </mt-loadmore>
</template>
<script>
export default {
    // props:['city'],
    data () {
        return {
            currentCity:this.city,
            allLoaded:false,
            lists: [],
            count:0,
            page:1,
            totalPage:0
        }
    },
    methods: {

        loadBottom () {
            this.page ++
            if( this.page > this.totalPage ){
                this.allLoaded = true
                return
            }
            this.start = (this.page -1)*this.count
            this.getMovies()
        },

        getNames (arr) {
            return arr.map (item=>{
                return item.name
            }).join();
        },

        getMovies () {
            //加载动画
            this.$loading.open()

            this.$http.post('api/top250',{
                // city:this.currentCity.replace(/市$/,''),
                city:'广州',
                count:this.count,
                start:this.start,
                apikey:'0b2bdeda43b5688921839c8ecb20399b'
            }).then(res=>{
                let data = res.data
                console.log(data)
                //根据拿到的总数量来计算分页数量
                this.totalPage = Math.ceil(data.total/data.count)
                //三点算法为ES6中的算法，将数组序列化，成为逗号隔开的序列
                this.lists.push(...data.subjects)

                //关闭加载的动画
                this.$loading.close()
            })
        }
    },
    created () {
        this.getMovies()
    }
}
</script>
<style lang="scss" scoped>
    ul{list-style: none;padding:0;margin:0;}
    .movielist{
        padding:10px;
        li{
            overflow:hidden;
            margin-bottom:10px;
            padding-bottom:10px;
            border-bottom: 1px dotted #ccc;
            display:flex;
            img{
                margin-right:20px;
                height:150px;
            }
            .info{
                text-align:left;
            }
        }
    }
</style>

