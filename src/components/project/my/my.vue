<template>
	<div class="main">
		<div class="top">
			<div class="name">
				<i class="prefix-icon wtf wtf-my text-primary ng-star-inserted"></i>
				<a href="javascript:;">我的任务</a>
			</div>
			<div class="content">
				 <div class="nav1-primary">
				 	 <router-link to='/project/my/myWork' class="link">我负责的</router-link>
				 	 <router-link to='/project/my/myWork' class="link">我分配的</router-link>
				 	 <router-link to='/project/my/myWork' class="link">我参与的</router-link>
				 	 <router-link to='/project/my/myWork' class="link">我创建的</router-link>
				 </div>
			</div>
			<div class="operation"></div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang="scss" scoped>
	.main{
		display: flex;
	    flex-direction: column;
	    flex: auto;
	    height: 100%;
	    background: 0 0;
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
	.wtf-my:before {
   		 content: "\e709";
	}
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
	.bottom1 .empty{
			flex-grow: 1;
		    display: flex;
		    flex-direction: column;
		    overflow-x: auto;
		    overflow-y: hidden;
		    user-select: none;
		    padding: 15px 0px 15px 8px;
	}
	.bottom1 .board-main{
		    flex-grow: 1;
		    display: flex;
		    flex-wrap: nowrap;
	}
	.board-main .group{
		width: 280px;
	    min-width: 280px;
	    box-sizing: content-box;
	    margin: 0px 7px;
	}
	.gwrapper{
		display: flex;
	    flex-direction: column;
	    flex-wrap: nowrap;
	    max-height: 100%;
	    background: rgb(253, 253, 253);
	    border-radius: 3px;
	}
	.group .group-header{
		position: relative;
    	padding: 17px 10px 10px;
	}
	.group-header .header-content{
		display: flex;
	    flex-direction: row;
	    justify-content: flex-start;
	    align-items: center;
	}
	.group-title{
		white-space: nowrap;
	    text-overflow: ellipsis;
	    color: rgb(51, 51, 51);
	    font-size: 1rem;
	    max-width: 150px;
	    margin-right: 10px;
	    overflow: hidden;
	}
	.group-count{
		font-size: 0.875rem;
	    font-weight: 400;
	    color: rgb(170, 170, 170);
	    margin-right: 2px;
	}
	.group-count.finished{
		color: rgb(34, 215, 187);
	}
	.group-count.unfinished{
		color: rgb(255, 196, 66);
	}
   .header-progress{
   	   padding-top:16px;
   }
   .header-progress .progress{
   	   	height:6px;
   	   	font-size: 0.65625rem;
	    background-color: rgb(238, 238, 238);
	    overflow: hidden;
	    border-radius: 0.25rem;
   }
   .group-body{
	   	 overflow-y: auto;
	    overflow-x: hidden;
	    vertical-align: top;
	    display: inline-block;
	    zoom: 1;
	    flex: 1 1 auto;
   }
   .group-list{
   	   min-height: 5px;
       padding: 0px 10px;
       overflow: hidden;
   }
   .group-footer{
   	    padding: 0px 10px 10px;
    	flex: 0 0 auto;
   }
   .group-footer a{
   	 	display: block;
    	line-height: 32px;
    	color: rgb(102, 102, 102);
    	text-decoration:none;
   }
   .wtf-plus::before {
    	content: "";
	}
</style>