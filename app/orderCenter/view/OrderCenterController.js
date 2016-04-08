Ext.define('serviceCenter.orderCenter.view.OrderCenterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderCenter',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    // 点击grid更新form和具体内容多grid数据
    onSelect:function(grid, record, index, eOpts ){
      //form赋值
        var orderCenterData      = record.data;
        this.assignVal({'order_user_id':orderCenterData.userID,'order_code':orderCenterData.code,'order_total_price':orderCenterData.totalPrice,
              'order_create_time':orderCenterData.createTime,'order_pay_time':orderCenterData.pay_time,'order_status':orderCenterData.status,
              'order_remark_title':orderCenterData.remark_title,'order_remark_description':orderCenterData.remark_description,
              'order_pay_channel':orderCenterData.payChannel,'order_channel':orderCenterData.orderChannel,
              'order_update_time':orderCenterData.updateTime});

    //  grid加载数据
     var orderServiceGrid = this.lookupReference('orderServiceGrid');
        var datas=record.data.orderDetails;
        var store = Ext.create('Ext.data.Store', {});
        store.setData(datas);
        orderServiceGrid.setStore(store);
    //日志记录
     var orderServiceLogGrid = this.lookupReference('orderServiceLogGrid');
     var logDatas=record.data.orderLogs;
     var logStore = Ext.create('Ext.data.Store', {});
     logStore.setData(logDatas);
     orderServiceLogGrid.setStore(logStore);
    },

    //公共赋值
    assignVal:function(arr)
    {
      for(var itemId in arr)
      {
        var itemObj = (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);
        if(itemObj){
          if(!arr[itemId]){arr[itemId]='';}
          var content = (itemObj.config.text+' '+arr[itemId]);
          itemObj.update(content);
        }
      }
    },

    //点击条件查询
    onSearchClick:function(){
      var userIDQuery = this.lookupReference('userIDQuery');
      var userID=userIDQuery.getValue();

      var codeQuery = this.lookupReference('codeQuery');
      var code=codeQuery.getValue();

      var orderStatusComboBox = this.lookupReference('orderStatusComboBox');
      var status=orderStatusComboBox.lastValue;

      var orderCenterGrid = this.lookupReference('orderCenterGrid');
      var store=orderCenterGrid.getStore();

      var params=new Object();
      if(status){params.status=status;}
      if(userID){params.userID=userID;}
      if(code){params.code=code;}
      store.reload({params:params});
    },


    //点击显示全部
    onshowAll:function(){
      var orderCenterGrid = this.lookupReference('orderCenterGrid');
      var store=orderCenterGrid.getStore();
      store.reload({params:''});
      }


});
