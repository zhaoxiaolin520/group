<template>
  <div class='app'>
      <div class="wone">
       <p><img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_24x24.png" alt="">网盘助手<i class="iconfont icon-xiala"></i></p>
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
                url:'/messages/zhushou/weidu',
                title:'未读'
              },
                {
                url:'/messages/zhushou/yidu',
                title:'已读'
              },
                {
                url:'/messages/zhushou/daichuli',
                title:'待处理'
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
   margin-right:10px;
   position: relative;
   top:6px;
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
