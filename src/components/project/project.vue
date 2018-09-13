<template>
	 <div class="wrapper">
      	  <div class="side">
      	  	   <div class="header">
      	  	   	  <span class="title">项目</span>
      	  	   	  <div class="more">
      	  	   	  	 <button class="btn-icon-lg btn btn-icon btn-icon-light">
      	  	   	  	 	<i class="wtf wtf-project-add-o"></i>
      	  	   	  	 </button>
      	  	   	  </div>
      	  	   	</div>
      	  	   	<div class="body-list">
      	  	   		<div class="search">
      	  	   			<font-awesome-icon icon="search"/>
      	  	   			<input class="form-control ng-untouched ng-pristine ng-valid" type="text" placeholder="搜索任务">
      	  	   		</div>
      	  	   		<div>
      	  	   			<div class="section">
      	  	   				<div class="section-header">
      	  	   					<a class="expand-icon" href="javascript:;">
      	  	   						<font-awesome-icon icon="caretright"/>
      	  	   					</a>
      	  	   					<a class="title" href="javascript:;">工作</a>
      	  	   				</div>
      	  	   				<div class="section-body section-body--mission">
      	  	   					<ul>
      	  	   						<li>
      	  	   							<router-link to='/project/task' class="section-item">
                                <font-awesome-icon icon="tasks"/>下属任务
                            </router-link>
      	  	   						</li>
      	  	   						<li>
      	  	   							<router-link to='/project/my' class="section-item">
                               <font-awesome-icon icon="tasks"/>我的任务
                            </router-link>
      	  	   						</li>
      	  	   					</ul>
      	  	   				</div>
      	  	   			</div>
      	  	   			<div class="section">
      	  	   				<div class="section-header">
      	  	   					<a class="expand-icon" href="javascript:;">
      	  	   						<font-awesome-icon icon="caretright"/>
      	  	   					</a>
      	  	   					<a class="title" href="javascript:;">项目</a>
      	  	   					<a class="action pbox-trigger" href="javascript:;">
      	  	   						<i class="lcfont lc-approval-pending"></i>
      	  	   					</a>
      	  	   				</div>
      	  	   				<dl class="section-body">
      	  	   					<dd>
      	  	   						<div>
      	  	   							<router-link to='/project/projects' class="section-item project">
      	                          123 
                                  <i class="lcfont lc-approval-pending action"></i>
      	  	   							</router-link>
      	  	   						</div>
      	  	   					</dd>
      	  	   				</dl>
      	  	   			</div>
      	  	   			<section class="section">
      	  	   				<div class="section-header">
      	  	   					<a class="expand-icon">
      	  	   						<font-awesome-icon icon="cog"/>
      	  	   					</a>
      	  	   					<router-link to='/project/cofig' class="title">配置中心</router-link>
      	  	   				</div>
      	  	   			</section>
      	  	   			<div class="section selectable">
      	  	   				<div class="section-header active">
      	  	   					<a class="expand-icon">
      	  	   						<font-awesome-icon icon="trash"/>
      	  	   					</a>
      	  	   					<router-link to='/project/trash' class="title">回收站</router-link>
      	  	   				</div>
      	  	   			</div>
      	  	   		</div>
      	  	   	</div>
      	  </div>
          <router-view></router-view>
      </div>
</template>
<script>
	export default{
	}
</script>
<style lang="scss" scoped>
   .wrapper{
    	position:relative;
    	width:calc(100% - 70px);
    	overflow:hidden;
    	display:-webkit-flex;
    	flex-direction:row;
    	-webkit-box-flex:1;
    	-webkit-flex:1 1 0;
      height:100%;
    }
  .wrapper{
    background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830) 0% 0% / cover;
  }
  .side{
	  display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    position: relative;
    width: 240px;
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    transition: width .2s ease-in-out;
}
.side .header{
	height:50px;
}
.header .title{
	float:left;
	margin:0 20px;
	color:#333;
	line-height:50px;
	font-size:16px;
}
.side .more{
	float:right;
	margin:0 20px;
	line-height:50px;
}
.more .wtf-project-add-o{
    font-size:1.25rem;
    display:inline-block;
    line-height:1;
    margin:0;
}
.more .wtf-project-add-o:before{
	content: "\e600";
}
.body-list{
	-webkit-flex:1 1 0;
	-webkit-box-flex:1;
	margin-bottom:3px;
}
.body-list .search{
	padding:0 20px 10px;
	position:relative;
}
.body-list .search i.lc-search{
   position:absolute;
   left:30px;
   top:6px;
   color:#8f8f8f;
}
.lc-search:before {
    content: "\e619";
}
.form-control {
    display: block;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eee;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.search input{
  	background:#f3f3f3;
  	box-shadow:none;
  	height:36px;
    color:#666;
    font-size:14px;
    padding-left:28px;
    border-radius:20px;
    border:1px solid transparent;
}
.section{
	width:240px;
	margin-bottom:2px;
}
.section .section-header{
	padding:8px 20px;
	margin-bottom:2px;
	cursor:pointer;
	position:relative;
}
.section-header .expand-icon{
	margin-right:6px;
	color:#aaa;
	width:14px;
	display:inline-block;
	vertical-align:middle;
}
.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;
    top:12px;
    left: 30px;
    color: #8f8f8f;
}
.expand-icon i{
	font-size:14px;
}
.lc-caret-down:before {
    content: "\e6fe";
}
.section-header .title{
	text-decoration:none;
	color:#333;
}
.section-body ul{
	list-type:none;
}
.section-body .section-item{
	color:#666;
	display:block;
	padding:9px 20px 9px 39px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	text-decoration:none;
	transition: box-shadow .2s,-webkit-box-shadow .2s;
    border-right: 4px solid transparent;
}
.section-item .item-icon{
	display:inline-block;
	margin-bottom:8px;
	position:relative;
	top:1px;
}
.wtf-subordinate:before {
    content: "\e70a";
}
.lc-caret-down {
    -webkit-transition: all .2s cubic-bezier(.4,.1,.5,1) .1s;
    transition: all .2s cubic-bezier(.4,.1,.5,1) .1s;
}
.rotate-caret {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.wtf-my:before {
    content: "\e709";
}
.section .section-header:hover{
	box-shadow:0 0 8px 2px #eee;
}
.section-header:active{
	background:#e7f9f6;
	border-right:4px solid #22d7bb;
}
.section .section-item:hover{
	box-shadow:0 0 8px 2px #eee;
}
.section-body .section-item.active,.section .section-header.active{
      background: #e7f9f6;
      border-right: 4px solid #22d7bb;
}
.svg-inline--fa[data-v-436b5ee6] {
   position:none;
}
.section .section-header:active{
   background:#e7f9f6;
   border-right:4px solid #22d7bb;
}
</style>