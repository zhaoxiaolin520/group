<template>
	<div class="main">
		<div class="top">
			<div class="name">
				<font-awesome-icon icon="cog"/>
				<a href="javascript:;">配置中心</a>
			</div>
			<div class="content">
				 <div class="nav1-primary">
				 	 <router-link to='/project/config/template' class="link">项目</router-link>
				 	 <router-link to='/project/config/type-group' class="link">任务</router-link>
				 	 <router-link to='/project/config/role-mode' class="link">安全</router-link>
				 	 <router-link to='/project/config/reminder-mode' class="link">高级</router-link>
				 	 <router-link to='/project/config/addons' class="link">全局</router-link>
				 </div>
			</div>
			<div class="operation"></div>
		</div>
		    <router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
                
			}
		},
		methods:{

		},
		computed:{
		}
	}
</script>
<style lang="scss" scoped>
	.main{
		display: flex;
	    flex-direction: column;
	    flex: auto;
	    height: 100%;
	    background: 0 0;
		overflow: scroll;
	}
	.main .top{
		display:flex;
        flex: 0 0 auto;
	    background: rgba(253,253,253,.97);
	    padding: 0 15px;
	    height: 50px;
	    line-height: 50px;
	    border-bottom: 1px solid #eee;
	}
	.top .name{
        font-size:1rem;
        color:#333;
	}
	.top .mane .prefix-icon{
		margin-right: 10px;
    	color: #22d7bb;
	}
	.top .name a{
		text-decoration:none;
		color:#333;
	}
	.top .content{
		flex:auto;
	}
	.top .nav1-primary{
		justify-content: center!important;
		flex-wrap: wrap;
	    padding-left: 0;
	    margin-bottom: 0;
	    list-style: none;
	    text-align:center;
	}
	.nav1-primary .link{
		text-decoration:none;
		margin-right:20px;
		min-width:80px;
		padding: .9065rem 1rem .7815rem;
		color: #333;
	}
	.nav1-primary .link:hover {
	    color: #22d7bb;
	    text-decoration: none;
	    border-bottom: 2px solid #22d7bb;
	}
	.nav1-primary .link.active{
		color: #22d7bb;
    	border-bottom: 2px solid #22d7bb;
	}
	.active{
		color: #22d7bb;
    	border-bottom: 2px solid #22d7bb;
	}
	.wtf-my:before {
   		 content: "\e709";
	}
</style>