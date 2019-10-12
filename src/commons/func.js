import store from '@/store';
import cookie from '@/utils/cookie.js';
//生成AddDayCount天之前/之后的年月日
export function GetDate(AddDayCount = 0) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;//获取当前月份的日期
  var d = dd.getDate();
  if (m >= 1 && m <= 9) {
    m = "0" + m;
  }
  if (d >= 0 && d <= 9) {
    d = "0" + d;
  }
  return y + "-" + m + "-" + d;
}
//查询cha在str中第num个的位置,num从0开始
export function findStr(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}
//获取样式
export function getStyle(obj,attr){
  if(obj.currentStyle){
      //IE,OPER
      return obj.currentStyle[attr];
  }else{
      //chrome、safari、FireFox
      return window.getComputedStyle(obj)[attr];
  }
}
//判断是否含有某个类名
export function hasClass(elem, classm) {
  return elem.className.indexOf(classm) > -1;
}