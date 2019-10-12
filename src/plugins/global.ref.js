//全局的一些引用可以放这儿，不必全放main.js中，哪怕最后还是在main.js中执行
import Vue from 'vue';
import axios from './http'

function addEvent(obj, type, callback, useCapture=false) {
    obj.addEventListener(type, callback, useCapture);
    addEventList(obj, type, callback, useCapture);
}

function removeEvent (obj, type, callback, useCapture=false) {
    obj.removeEventListener(type, callback, useCapture);
    removeEventList(obj, type, callback, useCapture);
}

function addEventList(obj, type, callback, useCapture=false) {
    if (obj.eventList) {
        if (obj.eventList[type]) {
            obj.eventList[type].push({ callback: callback, useCapture: useCapture });
        } else {
            obj.eventList[type] = [{ callback: callback, useCapture: useCapture }];
        }
    } else {
        obj.eventList = {};
        obj.eventList[type] = [{ callback: callback, useCapture: useCapture }];
    }
}

function removeEventList(obj, type, callback, useCapture=false) {
    let eventList=obj.eventList;
    if (eventList) {
        if (eventList[type]) {            
            for (let i = 0; i < eventList[type].length; i++) {
                if (eventList[type][i].callback===callback) {
                    eventList[type].splice(i, 1);
                    if (eventList[type].length===0) {
                        delete eventList[type];
                    }
                    break;
                }
            }
        } 
    } 
}

Object.defineProperty(Vue.prototype, '$http', {
    value: axios
});
Object.defineProperty(Vue.prototype, 'addEvent', {
    value: addEvent
});
Object.defineProperty(Vue.prototype, 'removeEvent', {
    value: removeEvent
});
Object.defineProperty(Vue.prototype, 'addEventList', {
    value: addEventList
});
Object.defineProperty(Vue.prototype, 'removeEventList', {
    value: removeEventList
});