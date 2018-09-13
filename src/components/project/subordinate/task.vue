<template>
	<div class="main">
		<div class="top">
			<div class="name">
				<i class="prefix-icon wtf wtf-subordinate text-primary"></i>
				<a href="javascript:;">下属任务</a>
			</div>
			<div class="content"></div>
			<div class="operation"></div>
		</div>
		<div class="bottom">
			<div class="main-content">
				<div class="text-center">
					<img class="img" src="https://cdn.worktile.com/pro/image/app/mission/coming_soon.png">
					<div class="desc">新功能正在开发中，敬请期待。</div>
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
	.text-center {
		margin-top:220px;
    	text-align: center!important;
	}
	.text-center .desc{
    	margin: 40px 0 12px;
    	font-size: 1.125rem;
	}
</style>