import Vue from 'vue'
import path from 'path'

Vue.filter('formatImage',(url)=>{
    console.log(url);
    let ext = path.extname(url);
    return url.replace(ext,'.thumb.600_0_c' +ext)
})