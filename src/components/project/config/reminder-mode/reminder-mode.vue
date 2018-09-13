<template>
  <div class='bottom1'>
    <div class="main-title">
            <div class="navl">
                  <router-link to='/project/config/template/template1' class="link ng-binding ng-scope">项目模板</router-link>
                  <router-link to='/project/config/template/addons' class="link ng-binding ng-scope">组件管理</router-link>
                  <router-link to='/project/config/template/insight' class="link ng-binding ng-scope">报表管理</router-link>
            </div>
    </div>  
    <router-view></router-view>     
</div>			 	 
</template>
<script>
  
</script>
<style lang="scss" scoped>
.main .bottom1{
    display: flex;
      flex-direction: column;
      flex: auto;
      height: 100%;
      background: 0 0;
  }
  .main .bottom1 .main-title{
    height: 38px;
      line-height: 38px;
      display:flex;
      flex: 0 0 auto;
      background: rgba(253,253,253,.97);
      padding: 0 15px;
  }
  .main .bottom1 .navl{
    margin-left: 26px;
      margin-right: 7px;
  }
  .main .bottom1 .navl a.active{
    color: #22d7bb;
  }
  .main .bottom1 .navl a{
    text-decoration:none;
    padding: .532rem 0;
      margin-right: 40px;
      position: relative;
      color: #888;
  }
  .main .bottom1 a:nth-child(1):after {
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
  }
  .main .bottom1 a:nth-child(1):after {
        display: block;
        position: absolute;
        right: -20px;
  }
  .main .bottom1 a:nth-child(2):after {
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
  }
  .main .bottom1 a:nth-child(2):after {
        display: block;
        position: absolute;
        right: -20px;
  }
  .bottom1 .empty{
        webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        position: relative;
        padding: 15px 15px 0;
        height: 100%;
  }
</style>