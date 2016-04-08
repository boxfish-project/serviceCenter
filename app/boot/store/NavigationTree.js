Ext.define('serviceCenter.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: '服务中心',
            iconCls: 'x-fa fa-home',
            viewType: 'Service',
            leaf: true
        }
        ,{
            text: '订单中心',
            iconCls: 'x-fa fa-th-list',
            viewType: 'OrderCenter',
            leaf: true
        }
      ]
    }

});
