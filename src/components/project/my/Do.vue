<template>
	<div class="empty">
					<div class="board-main">
						<div class="group">
							<div class="gwrapper">
								  <div class="group-header">
										<div class="header-content">
											<div class="group-title">收件箱</div>
											<div class="group-count finished">0</div>
											<div class="group-count">/</div>
											<div class="group-count unfinished">0</div>
											<div class="group-count">/</div>
											<div class="group-count">0</div>
										</div>
										<div class="header-progress">
											<div class="progress progress-sm">
												<span style="height: 100%"></span>
												<span style="height: 100%"></span>
												<span style="height: 100%"></span>
											</div>
										</div>
									</div>
									<div class="group-body">
										     <div class="group-list"></div>
									</div>
									<div class="group-footer">
										 <a href="javascript:;">
											 <font-awesome-icon icon="plus"/> 添加新任务 
										 </a>
									</div>
							</div>
						</div>
						<div class="group">
							<div class="gwrapper">
								  <div class="group-header">
										<div class="header-content">
											<div class="group-title">今天要做</div>
											<div class="group-count finished">0</div>
											<div class="group-count">/</div>
											<div class="group-count unfinished">0</div>
											<div class="group-count">/</div>
											<div class="group-count">0</div>
										</div>
										<div class="header-progress">
											<div class="progress">
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
											</div>
										</div>
									</div>
									<div class="group-body">
										     <div class="group-list">
										     	<div class="cart-wrapper">
										     		 <div class="cart-content">
										     		 	 <div class="cart-header">
										     		 	 	<div class="left">
										     		 	 		<span class="thy-label-emboss-status--completed thy-label thy-label-emboss-status" thylabel="emboss-status" style="color: rgb(51, 51, 51); background-color: rgba(250, 90, 85, 0.1);">
										     		 	 			<i class="mr-1 wtf wtf-pending ng-star-inserted" style="color: rgb(250, 90, 85);"></i>未开始</span>
										     		 	 	</div>
										     		 	 	<div class="right">
										     		 	 		<span class="avatar-default ng-star-inserted" style="background-color: rgb(239, 126, 222);"><div>M</div></span>
										     		 	 	</div>
										     		 	 </div>
										     		 	 <div class="thy-card-content-body">
										     		 	 	<div class="thy-card-name task-card-title">123</div>
										     		 	 </div>
										     		 </div>
										     	</div>
										     </div>
                                        <div class="info">
										     	 <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle" v-model='a'></textarea>
										     	 <div class="d-flex">
										     	 	<div class="flex-grow-1 btn-pair-sm">
										     	 		<button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm">确定</button>
										     	 		<a class="btn btn-link btn-link-info btn-sm">取消</a>
										     	 	</div>
										     	 	<div class="thy-group-card-add-aside-right"></div>
										     	 </div>
										</div>
									</div>
									<div class="group-footer">
										 <a href="javascript:;">
											 <font-awesome-icon icon="plus"/>添加新任务 
										 </a>
									</div>
							</div>
						</div>
						<div class="group">
							<div class="gwrapper">
								  <div class="group-header">
										<div class="header-content">
											<div class="group-title">下一步要做</div>
											<div class="group-count finished">0</div>
											<div class="group-count">/</div>
											<div class="group-count unfinished">0</div>
											<div class="group-count">/</div>
											<div class="group-count">0</div>
										</div>
										<div class="header-progress">
											<div class="progress">
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
											</div>
										</div>
									</div>
									<div class="group-body">
										     <div class="group-list"></div>
									</div>
									<div class="group-footer">
										 <a href="javascript:;">
											 <i class="wtf wtf-plus thy-group-footer-action-icon"></i> 添加新任务 
										 </a>
									</div>
							</div>
						</div>
						<div class="group">
							<div class="gwrapper">
								  <div class="group-header">
										<div class="header-content">
											<div class="group-title">以后再做</div>
											<div class="group-count finished">0</div>
											<div class="group-count">/</div>
											<div class="group-count unfinished">0</div>
											<div class="group-count">/</div>
											<div class="group-count">0</div>
										</div>
										<div class="header-progress">
											<div class="progress">
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
												<span style="height: 100%;"></span>
											</div>
										</div>
									</div>
									<div class="group-body">
										     <div class="group-list"></div>
									</div>
									<div class="group-footer">
										 <a href="javascript:;">
											 <i class="wtf wtf-plus thy-group-footer-action-icon"></i> 添加新任务 
										 </a>
									</div>
							</div>
						</div>
					</div>
				</div>
</template>
<script>
	 export default{
	 	data(){
	 		return{
	 			isShow:false,
	 			a:'',
	 			list:[]
	 		}
	 	},
	 	methods:{
           isShow(){
           	  this.isShow=!isShow
           },
           sub(){
              this.list.push({
              	 name:this.a,
              	 state:'未开始',
              })
           }
	 	}
	 }
</script>
<style lang="scss">
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
	.cart-wrapper{
		display: flex;
	    flex-direction: row;
	    min-height: 50px;
	    margin-bottom: 10px;
	    border-radius: 2px;
	    overflow: hidden;
	    cursor: pointer;
	    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
	    transition: box-shadow .2s;
	}
	.card-content {
	    flex-grow: 1;
	    padding: 12px 12px 7px;
 }
 .cart-header{
 	    display: flex;
        flex-direction: row;
 }
 .cart-header .left span{
        padding: 5px 10px;
	    line-height: 1;
	    font-size: .75rem;
	    border-radius: 3px;
 }
 .wtf-pending:before {
    content: "\e6ad";
}
 .avatar-default, .thy-avatar-24 img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 24px;
    font-size: 12px;
    vertical-align: middle;
    text-align: center;
    overflow: hidden;
    zoom: 1;
    color: #fff;
    text-shadow: transparent 0 0 0;
    display:inline-block;
}
.thy-avatar-24 .avatar-default div, .thy-avatar-24 img div {
    display: inline-block;
    transform: scale(.9);
}
.thy-card-name {
    margin: 5px 0;
    line-height: 1.8;
}
.info{
    padding: 0 10px 10px;
    display: block;
}
.info textarea{
	margin-bottom:10px;
}
</style>