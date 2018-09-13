<template>
  <div class="board-main">
                 <div class="header">
              <div class="header">
                <div class="header-content">
                    <div class="lc-search-container">
                        <i class="lcfont lc-search"></i>
                        <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-empty" placeholder="搜索项目模板" v-model='text'>
                      </div>
                      <div class="header-action">
                       <button class="btn btn-primary btn-md btn-has-icon ng-binding ng-scope m-r-10"  @click='edit' la='editlist'>
                                        <font-awesome-icon icon="cog"/>新建模板
                                    </button>
                                    <button class="btn btn-outline-default btn-md btn-has-icon ng-binding ng-scope">
                            <i class="wtf wtf-setting-o" @click='edit'></i>类型管理
                        </button>
                    </div>
                </div>
             </div>   
              </div>
   <div class="body">
    <table class="table stat-table">
                <thead>
                     <tr>
                      <th>项目模板</th>
                      <th>备注</th>
                      <th>类型</th>
                      <th>状态</th>
                      <th>操作</th>
                     </tr>
                  </thead>
                  <tbody>
                      <tr v-for='item1 in UPDATE' :item='item1'>
                         <td class="table-column-width-20">{{item1.name}}</td>
                         <td class="text-muted">{{item1.desc}}</td>
                         <td class="table-column-width-level-1">{{item1.sort}}</td>
                         <td class="table-column-width-level-1">
                          <span class="list-status ng-binding ng-scope approved">{{item1.condition}}</span>
                         </td>
                         <td class="ng-scope table-column-width-level-3 operation text-center">
                    
                                <a class="link link-extended link-has-icon ng-binding ng-scope">
                                    <font-awesome-icon icon="cog"/>
                                </a>
                                <a class="" href="javascript:;" title="复制">
                                     <font-awesome-icon icon="clone"/>
                                </a>
                                <a class="" href="javascript:;" @click='edit()' title="编辑"> 
                                    <font-awesome-icon icon="clone"/>
                                </a>
                                <a class="" href="javascript:;"  @click='del(item1.id)' title="删除">
                                   <font-awesome-icon icon="trash"/>
                                </a>
                         </td>
                      </tr>
                  </tbody>
              </table>
      </div>
     <div class="modal ng-scope ng-isolate-scope in" role="dialog" index="0" animate="animate"  tabindex="-1" uib-modal-animation-class="fade" modal-in-class="in" modal-animation="true" style="z-index: 1050" v-if='editlist'>
  <div class="modal-backdrop fade ng-scope in" modal-in-class="in" modal-animation="true" data-bootstrap-modal-aria-hidden-count="1" aria-hidden="true" style="z-index: 1040;"></div>
  <div class='modal-dialog' style="z-index: 1100; display: block;">
  <div class="modal-content">
    <div class="modal-header">
        <a href="javascript:;" class="modal-close ng-scope" @click='editlist=false'>
           <font-awesome-icon icon="times"/>
        </a>
        <h3 class="modal-title ng-binding ng-scope">
               <i class=""></i>
            新建项目模板
        </h3>
    </div>
    <div class="modal-body">
         <form class="form-horizontal w5c-form ng-pristine ng-scope ng-invalid ng-invalid-required" name="addEditNotificationMode" role="form">
            <div class="form-group">
                <label class="col-sm-2 control-label ng-binding">模板名称</label>
                <div class="col-sm-10 control-panel">
                    <input class="form-control ng-pristine valid ng-empty ng-invalid ng-invalid-required ng-touched" name="name" placeholder="模板名称" v-model='txt'>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label ng-binding">模板类型</label>
                <div class="col-sm-10 control-panel">
                    <div class="lc-select">
                        <select class="form-control ng-pristine ng-untouched valid ng-empty ng-invalid ng-invalid-required" v-model='options'>
                          <option class="ng-binding" selected="selected">请选择模板类型</option>
                          <option label="通用">通用</option>
                          <option label="软件">软件</option>
                          <option label="研发管理项目">研发管理项目</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label ng-binding">备注</label>
                <div class="col-sm-10 control-panel">
                    <textarea class="form-control ng-pristine ng-untouched ng-valid valid ng-empty" name="description" rows="2" placeholder="输入任务类型备注" v-model='des'></textarea>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label ng-binding">图标</label>
                <div class="col-sm-10 control-panel">
                   <div class="wt-select-icon-wrap">
                        <ul></ul>
                   </div>
                </div>
            </div>
      <div class="form-group">
          <div class="offset-sm-2 col-sm-10">
              <div class="btn-pair">
                  <button type="button" class="btn btn-primary ng-binding btn-danger btn-sm" @click='ADDJ' @dblclick=''>确定</button>
                  <button class="btn btn-link btn-link-info ng-binding btn-primary btn-sm" @click='editlist=false'>取消</button>
              </div>
          </div>
      </div>
  </form>
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
            text:'',
            editlist:false,
            txt:'',
            options:'',
            des:''
       }
    },
    created(){
       this.$store.dispatch("GETALLJ")
    },
    methods:{
            del(id){
              this.$store.dispatch("DELJ",{
                id : id
              })
            },
            edit(){
               this.editlist=!this.editlist
            },
            ADDJ(){
                if(this.txt == ''||this.options==''||this.des=='') return
                 var id = '';
                var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
                for(var i = 0; i < 8; i++) {
                    id+= str[~~(Math.random() * str.length)]
                }
                this.$store.dispatch("ADDJ",{
                    name:this.txt,
                    id : id,
                    desc:this.des,
                    sort:this.options,
                    condition:"已启用"
                });
                this.editlist=false
                this.txt = '' 
                this.options = '' 
                this.des = '' 
            }
    },
    computed:{
       UPDATE(){
            var array = this.$store.state.list,
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
      display:block;
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
.modal-body{
     padding: 1.25rem 1.875rem 1.875rem;
  }
  .form-horizontal .form-group {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
}
.form-horizontal .form-group {
    margin-right: -15px;
}
.form-horizontal .form-group:nth-child(5){
    margin-bottom:0;
}
.form-horizontal .form-group .control-label {
    padding-right: 0;
    padding-left: 0;
}
.form-group .control-label {
    color: #888;
    font-size: 14px;
    font-weight: 400;
}
.form-control {
    display: block;
    width: 100%;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eee;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-control, .input-group-text {
    padding: .469rem .875rem;
    font-size: .875rem;
}
.lc-select {
    position: relative;
}
.lc-select select:required:invalid {
    color: #cacaca;
}
select.form-control:not([size]):not([multiple]) {
    height: calc(2.2505rem + 2px);
}
.lc-select select {
    padding-right: 30px;
}
.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow:none;
}
.btn-primary, .btn-primary:hover {
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn-pair .btn+.btn {
    margin-left: 10px;
}
.btn {
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .469rem 26px;
    font-size: .875rem;
    line-height: 1.5;
    min-width: 106px;
    border-radius: 1.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-link.btn-link-info {
    color: #aaa;
}
.btn.focus, .btn:focus {
    outline: 0;
    box-shadow:none;
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
.btn-primary, .btn-primary:hover {
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.fade.in.modal-backdrop:not(.show) {
    opacity: .3;
}
.modal-header {
    padding: 0 1.875rem;
    min-height: 1.5;
    align-items: center;
    height: 50px;
}
.modal-header .modal-close {
    order: 1;
}
.modal-close {
    color: #ddd;
    line-height: 50px;
}
.lc-close:before {
    content: "\e60e";
}
.modal-header h3 {
    font-size: 1rem;
    font-weight: 500;
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0,0,0,.2);
    border-radius: .3rem;
    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
    outline: 0;
}
.fade, .modal.in .modal-dialog {
    transform: translate(0,0);
}
@media (min-width: 576px){
.modal-dialog {
    max-width: 660px;
    margin: 3.75rem auto;
}
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display:block;
    overflow: hidden;
    outline: 0;
}
</style>