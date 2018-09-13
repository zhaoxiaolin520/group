<template>
<div class='board-main'>
	              <div class="header">
						 	  <div class="header-content">
						 	  	  <div class="lc-search-container">
        								<i class="lcfont lc-search"></i>
        								<input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" placeholder="搜索项目报表" v-model='text'>
        						  </div>
        						  <div class="header-action">
       								 <button class="btn btn-primary btn-md btn-has-icon ng-binding ng-scope m-r-10">
                                        <i class="ng-scope wtf wtf-plus"></i>添加项目报表
                       </button>
                      </div>
						 	  </div>
				</div>
  <div class="body">
	  <table class="table stat-table">
						 	 	  <thead>
						 	 	  	 <tr>
						 	 	  	 	 <th>组件名称</th>
                       <th>备注</th>
                       <th>支持平台</th>
                       <th>操作</th>
						 	 	  	 </tr>
						 	 	  </thead>
						 	 	  <tbody>
						 	 	  	  <tr v-for='item1 of UPDATE'>
						 	 	  	  	 <td class="table-column-width-20">{{item1.name}}</td>
						 	 	  	  	 <td class="text-muted">{{item1.desc}}</td>
						 	 	  	  	 <td class="table-column-width-level-1">{{item1.sort}}</td>
						 	 	  	  	 <td class="ng-scope table-column-width-level-3 operation text-center table-column-width-level-3">
                    
								                <a class="link link-extended link-has-icon ng-binding ng-scope">
								                	<font-awesome-icon icon="cog"/>
								                </a>
								                <a class="btn btn-icon btn-icon-md ng-scope" href="javascript:;">
								                  <font-awesome-icon icon="clone"/>
								                </a>
								                <a class="btn btn-icon btn-icon-md ng-scope" href="javascript:;">
								                  <font-awesome-icon icon="clone"/>
								                </a>
								                <a class="btn btn-icon btn-icon-md btn-icon-danger-weak ng-scope" href="javascript:;"  @click='del(item1.id)'>
								                    <font-awesome-icon icon="trash"/>
								                </a>
						 	 	  	  	 </td>
						 	 	  	  </tr>
						 	 	  </tbody>
						 	 </table>
		</div>	
	</div>			 	 
</template>
<script>
	export default{
    data(){
       return{
          text:''
       }
    },
    methods:{
       del(id){
        this.$store.dispatch("DELJ2",{
          id : id
        })
      }
    },
		created(){
			this.$store.dispatch("GETALLJ2")
		},
    computed:{
       UPDATE(){
            var array = this.$store.state.list2,
              searchString = this.text;
            if(!searchString){
              return array;
            }
            array = array.filter(function(item){
              if(item.name.indexOf(searchString) !== -1){
                return item;
              }
            })
            return array;

       }
    }
	}
</script>
<style lang="scss" scoped>
.body{
	padding:20px;
}
	.table {
    width: 100%;
    color: #333;
    margin-bottom: 1.25rem;
    background-color: transparent;
}
.stat-table, .stat-table td, 
.stat-table th, .table-bordered, 
.table-bordered td, .table-bordered th {
    border: 1px solid #eee;
}
.stat-table thead td, 
.stat-table thead th, 
.table-bordered thead td, 
.table-bordered thead th {
    text-align: center;
    color: #666;
    background-color: #f3f3f3;
}
.table td, .table th {
    padding: 12px 15px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
}
.table tbody tr td.table-column-width-20 {
    width: 20%;
}
.table tbody tr td.table-column-width-level-1 {
    width: 140px;
}
.table tbody tr td.table-column-width-level-3 {
    width: 240px;
}
.text-muted {
    color: #888!important;
}
.board-main{
		-webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    -webkit-flex: 1;
	    background: #fdfdfd;
	    height:98%;
	}
	.header-content{
       height:38px;
	}
   .lc-search-container{
   	  float:left;
   	  width:300px;
   	  position:relative;
   	  padding:0;
   }
   .lc-search-container .lc-search{
   	  position:absolute;
   	  top:7px;
   	  left:14px;
   	  color:#aaa;
   }
   .lc-search:before {
    content: "\e619";
   }
   .lc-search-container input{
   	  padding-left:34px;
   	  box-shadow:none;
   }
   .form-control, .input-group-text {
      padding: .469rem .875rem;
      font-size: .875rem;
   }
   .header{
   	     padding: 20px 20px 0;
   }
   .header-action{
   	  float:right;
   	  margin-right:0;
   }
   .m-r-10{
   	 margin-right:10px!important;
   }
   .btn-md {
    padding: .407rem 22px;
    border-radius: 1.25rem;
 }
 .btn-group-sm>.btn, .btn-md, .btn-sm {
    font-size: .875rem;
    min-width: 70px;
    line-height: 1.5;
}
.btn-primary, .btn-primary:hover {
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
.btn-group-outline-default>.btn, .btn-outline-default {
    color: #888;
    background-color: transparent;
    background-image: none;
    border-color: #ddd;
}
.wtf-plus:before {
    content: "\e634";
}
.wtf-setting-o:before {
    content: "\e640";
}
.btn:not(:disabled):not(.disabled).active, .btn:not(:disabled):not(.disabled):active {
    background-image: none;
}
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #22d7bb;
    border-color:#22d7bb;
}
.btn.focus, .btn:focus {
    outline: 0;
    box-shadow:none;
}
.btn-primary.focus, .btn-primary:focus {
   	outline: 0;
    box-shadow:none;
}
.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow:none;
}
</style>