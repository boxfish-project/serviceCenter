Ext.define('serviceCenter.serviec.view.ServiceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.service',
    require:[
      'Ext.grid.*',
      'Ext.toolbar.ToolbarView'
    ],

    // 点击grid更新form和具体内容多grid数据
    onSelect:function(grid, record, index, eOpts ){
      //form赋值
        var serviceData = record.data;
        this.assignVal({'serviceName':serviceData.name,'serviceCode':serviceData.code,'serviceDescription':serviceData.description,
              'serviceOriginalPrice':serviceData.originalPrice,'servicePrice':serviceData.price,'serviceStartTime':serviceData.startTime,
              'serviceEndTime':serviceData.endTime,'serviceFlagEnable':serviceData.flagEnable,'serviceFlagVisible':serviceData.flagVisible,
              'serviceCreateTime':serviceData.createTime,'serviceUpdateTime':serviceData.updateTime});
     //grid加载数据
        var grid = this.lookupReference('serviceSpecificGrid');
        var datas   =record.data.productHasSKUSet;

        var gridData= Array();
        for(var data in datas){
          var obj =datas[data].productSKU;
          amount  =datas[data].amount;
          obj.amount=amount;
          gridData.push(obj);
        }
        var store = Ext.create('Ext.data.Store', {});
        store.setData(gridData);
        grid.setStore(store);
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
    }

});
