<template>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
	    <div class="detaillist">
            <h1>{{details.title}}</h1>
            <p>
                {{details.summary}}-
                {{details.review_count}}-
                {{details.countries[0]}}-
                {{details.images.small}}-
                {{details.ratings_count}}-
                {{details.directors}}-
            </p>
	    </div>
    </mt-loadmore>
</template>
<script>
export default {
    props:['id'],
    data () {
        return {
            currentId:this.id || '广州',
            allLoaded:false,
            details:'',
        }
    },
    methods: {

        loadBottom () {
        },

        getDetails () {
            //加载动画
            this.$loading.open()

            this.$http.get('/api/subject/'+this.currentId,{
            }).then(res=>{
                this.details = res.data

                //关闭加载的动画
                this.$loading.close()
            })
        },

    },
    created () {
        this.getDetails()
    }
}
</script>
<style lang="scss" scoped>
    .detaillist{
        margin:0 18px;

    }
</style>



