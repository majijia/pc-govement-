const prefix = process.env.VUE_APP_PREFIX;  //全局引用
import prodApi from './prod'
let api = prodApi;
for(let k in api){
    api[k] = prefix+api[k];
}
export default api;