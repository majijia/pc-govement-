<template>
    <div class="out-not-found">
        <h1>嘤嘤嘤 ~~ (o゜▽゜)o☆[BINGO!]  页面找不到啦 ！</h1>
        <h2>咱们会在{{seconds}}秒之后回上个页面瞅瞅哦  ε=ε=ε=(~￣▽￣)~ </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seconds: 5,
            timer: null,
            that: this
        };
    },
    mounted() {
        this.timer = setInterval(() => {
            this.seconds--;
            if (this.seconds == 0) {
                clearInterval(this.timer);
                this.timer = null;
                this.$router.go(-1);
            }
        }, 1000);
    }
};
</script>

<style lang="less" scoped>
.out-not-found {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 60px;
    background:#ffffff;
}
</style>