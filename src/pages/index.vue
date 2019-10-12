<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <img src="/static/img/logo.png" class="logo">
                        <Menu-item  @click.native="pointC(1)" :class="{'bac':indexs===1}" >
                            <img src="/static/img/shuju.png" class="tabImg">
                            <span class="layout-text">数据统计</span>
                        </Menu-item>
                    <Menu-item key="2" @click.native="pointC(2)" :class="{'bac':indexs===2}">
                        <img src="/static/img/can.png" class="tabImg">
                        <span class="layout-text layout-can">残疾人</span>
                    </Menu-item>
                    <Menu-item key="3" @click.native="pointC(3)" :class="{'bac':indexs===3}">
                        <img src="/static/img/chan.png" class="tabImg">
                        <span class="layout-text">我的产品</span>
                    </Menu-item>
                    <Menu-item key="4" @click.native="pointC(4)" :class="{'bac':indexs===4}">
                            <img src="/static/img/xi.png" class="tabImg">
                            <span class="layout-text">系统管理</span>
                        </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <!--头部-->
                    <div class="headTit">山东省残联</div>
                    <div class="phone">
                        <span class="userName">用户名</span>
                        <Tooltip placement="bottom" >
                            <span class="userName">联系客服</span>
                            <div slot="content">
                                <p>专属顾问：13566995523</p>
                                <p>客服电话：010-1234567</p>
                                <p>服务时间：8:00-18:00</p>
                            </div>
                        </Tooltip>
                        <!-- <span >联系客服</span> -->
                        <span class="out">
                            <img src="/static/img/tui.png" class="outs">
                            <span>退出</span>
                        </span>
                    </div>
                </div>
                <div>
                    <!-- <div class="layout-content-main">内容区域</div> -->
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive> 

                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
let env = process.env.NODE_ENV;
import Vue from "vue";
export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                indexs:1
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            /*点击路由跳转*/
            pointC(value){
                this.indexs=value;
                if(value==1){
                    this.$router.push('/Statistics')
                }
                else if(value==2){
                    this.$router.push('/defMan')
                }
                else if(value==3){
                    this.$router.push('/myProduc')
                }
                else if(value==4){
                    this.$router.push('/sysment')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
  .layout{
        background: #F5F3F0;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .ivu-row-flex{
        height: 100%;
    }
    .ivu-col-span-19{
        width: 88%;
    }
    .ivu-menu-dark{
        background: #35302E;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        height: 90%;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #35302E;
        width: 12%;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .logo{
        width: 100px;
        height: 100px;
        margin:34px 0 40px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-text{
        font-size: 18px;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .tabImg{
        width: 16px;
        height: 16px;
        margin-right: 14px;
        color: #fff !important;
    }
    .ivu-menu-item{
        padding:18px 24px;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover{
        background:rgba(252,149,65,0.3);
    }
    .layout-can{
        margin-right: 18px;
    }
    .bac{
        background:rgba(252,149,65,0.3);
        border-left:2px solid #FC9541;
        color: #fff !important;
    }
    /*头部*/
    .layout-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 30px;
        font-size: 14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        .phone:hover{
           cursor: pointer;
        }
    }
    .headTit{
        font-size: 16px;
    }
    .userName{
        padding:0 40px;
        border-right: 2px solid #DEDEDE;
    }
    .outs{
        width:14px;
        height:14px;
        margin-left:35px;
        margin-right: 7px;
    }
    
</style>