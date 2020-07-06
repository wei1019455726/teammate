$(function() {

     app.init();

})

var app = {

    init:function() {

        this.deleteConfirm();

    },

    deleteConfirm: function() {
         
          $('.delete').click(function() {

             var flag = confirm('您确定要删除吗？');

             return flag;

          })

    },

    changeStatus:function(el,model,attr,id){

        $.get('/changeStatus',{model:model,attr:attr,id:id},function(data) {
            
            if (data.success) {

                if (el.src.indexOf('yes') != -1) {
                    el.src = '/images/no.gif';
                } else if (el.src.indexOf('no') != -1){
                    el.src = '/images/wait.png';
                }else{
                    el.src = '/images/yes.gif';
                }

            }

        })

    }

}