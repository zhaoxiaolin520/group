<template>
	<div class="main">
		<div class="top">
			<div class="name">
				<i class="prefix-icon wtf wtf-trash-o"></i>
				<a href="javascript:;">回收站</a>
			</div>
			<div class="content"></div>
			<div class="operation"></div>
		</div>
		<div class="bottom">
			<div class="main-content">
				<div class="empty-state">
					<span class="empty-icon"><i class="wtf wtf-empty-o"></i></span>
					<p class="empty-text">项目不存在或者没有权限查看</p>
				</div>
			</div>
		</div>
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
	    display:none;
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
	.wtf-trash-o:before {
    	content: "\e639";
	}
	.main .bottom{
		flex: 1;
	    display: flex;
	    flex-direction: column;
	    padding: 15px;
	    background: 0 0;
	    overflow:auto;
	}
	.main .bottom .main-content{
		flex:auto;
		background:#fff;
	}
	.main .main-content .empty-state{
		margin-top:363.5px;
		text-align:center;
	}
	.empty-state .empty-text{
		color:#cacaca;
		font-size:.875rem;
	}
	.empty-state .empty-icon{
		color: #eee;
    	font-size: 3.125rem;
	}
	.empty-state .empty-icon:before{
    	content: "\e655";
	}
</style>