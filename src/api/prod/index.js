import regist from './registModel';
//这儿是通用接口
let obj = {
    login:"/logindoctorlogin"
}
let api = Object.assign(obj,regist);
export default api;