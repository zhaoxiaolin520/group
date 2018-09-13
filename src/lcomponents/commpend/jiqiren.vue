<template>
  <div class='app'>
      <div class="wone">
       <p><img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">小特机器人<i class="iconfont icon-xiala"></i><span>@xiaote</span></p>
      </div>

      
      <div class="nav">
         <a href="javascript:"  v-for="(item) of list" @click="routerGo(item.url)" :class="{cur : item.title == $route.name}">{{item.title}}</a>
      </div>

      <div class="vie">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
     data(){
        return {
           list:[
              {
                url:'/messages/jiqiren/xiaoxi',
                title:'消息'
              },
                {
                url:'/messages/jiqiren/wenjian',
                title:'文件'
              },
                {
                url:'/messages/jiqiren/guding',
                title:'固定消息'
              },
           ]
        }
     },
      methods:{
      routerGo(url) {
      //路由的跳转
      console.log(this.$route);
      this.$router.push({ path:url});
    }
  }
 }
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
    position: relative;
    top: -5px;
  height: 100%;
  background: rgba(253,253,253,.95);
}
.wone{
  margin:5px 0 0 10px;
}
.wone img{
  height:24px;
  border-radius:50%;
  width:24px;
   margin-right:10px;
   position: relative;
   top:6px;
}
.wone span{
  top:-3px;
   position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
 
    line-height: 50px;
    padding: 0 10px;
    color: #aaa;
}


.nav{
  margin:25px 0 0 60px;
}
.nav a{
    width:80px;
    float:left;
    display: block;
    text-align: center;
    margin-right: 22px;
    padding: 5px 9px 9px;
    color: #333;
    font-size: 14px;
    border-radius: 0;
    text-decoration: none;
}

.cur{
  border-bottom: solid 2px #22d7bb;
  color: #22d7bb;
}
.vie{
  width:100%;
    height:86%;
  margin-top:10px;
  padding:15px;
  background:rgb(206, 205, 205);
}
</style>
