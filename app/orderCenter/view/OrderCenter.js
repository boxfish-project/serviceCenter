Ext.define('serviceCenter.orderCenter.view.OrderCenter', {
    extend: 'Ext.container.Container',
    xtype: 'OrderCenter',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.HBox',
        'Ext.grid.column.Date',
        'Ext.form.*'

    ],
    controller:'orderCenter',
    viewModel: {type: 'orderCenter'},

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },

    cls:'shadow-panel',
    margin:10,
    flex: 1,

    items:[
      {
        xtype:'gridpanel',
        reference:'orderCenterGrid',
        itemId:'orderCenterGrid',
        flex: 1,
        height:800,
        style: {
          border:'2px solid #D5D5D5'
        },
        bind:{
          store:'{orderCenter}'
        },
        viewConfig: {
            preserveScrollOnRefresh: true,
            stripeRows: true
        },
        // selModel: {
        //       //  type: 'spreadsheet',
        //       //  checkboxSelect: true,
        //        rowSelect : true
        //     },
        plugins:[{
                  ptype:'clipboard',
                  pluginId:'clipboard',
                  memory:true
                }
              ],
        columns:[
          {
            text:'订单id',
            dataIndex:'id',
            sortable:true,
            width:150,
            hidden:true,
            align : 'center'
          },{
            text:'用户号',
            dataIndex:'userID',
            sortable:true,
            width:120,
            align : 'center'
          },{
            text:'订单号',
            dataIndex:'code',
            sortable:true,
            // hidden:true,
            width:300,
            editor:{
              xtype:'textfield'
            },
            align : 'center'
          },{
            text:'总价格',
            dataIndex:'totalPrice',
            sortable:true,
            width:100,
            align : 'center'
          },{
            text:'生成时间',
            dataIndex:'createTime',
            sortable:true,
            // hidden:true,
            width:200,
            align : 'center'
          },{
            text:'付款时间',
            dataIndex:'pay_time',
            sortable:true,
            hidden:true,
            width:177,
            align : 'center'
          }
          ,{
            text:'订单状态',
            dataIndex:'status',
            sortable:true,
            // hidden:true,
            width:100,
            align : 'center'
          }
          ,{
            text:'备注标题',
            dataIndex:'remark_title',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'备注描述',
            dataIndex:'remark_description',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          }
          ,{
            text:'付款频道',
            dataIndex:'payChannel',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'订单频道',
            dataIndex:'orderChannel',
            sortable:true,
            hidden:true,
            width:70,
            align : 'center'
          },{
            text:'更新时间',
            dataIndex:'updateTime',
            sortable:true,
            hidden:true,
            width:70,
            align : 'center'
          }
        ],
          // 工具栏
        tbar: [
                  {
                      xtype: 'textfield',
                      fieldLabel:'用户号:',
                      labelWidth:45,
                      name: 'condition',
                      itemId: 'userIDQuery',
                      reference:'userIDQuery',
                      width:150,
                      emptyText: '按用户号查询',
                      allowBlank: true,
                      listeners:{
                        // specialkey:'onEnterKeyToSearch'
                      }
                  },
                      // 条件查询
                {
                    xtype: 'textfield',
                    fieldLabel:'订单号:',
                    labelWidth:45,
                    name: 'condition',
                    itemId: 'dictionary-condition',
                    itemId: 'codeQuery',
                    reference:'codeQuery',
                    width:255,
                    emptyText: '按订单号查询',
                    allowBlank: true,
                    listeners:{
                      // specialkey:'onEnterKeyToSearch'
                    }
                },{
                     xtype: 'combobox',
                     padding:'0 0 0 10',
                     fieldLabel: '订单状态',
                     labelWidth:60,
                     itemId: 'orderStatusComboBox',
                     reference:'orderStatusComboBox',
                     bind:{
                       store:'{statusComboBox}'
                     },
                     forceSelection: true,
                     width:200,
                     loadMask:false,
                    //  multiSelect: true,
                    //  editable: false,
                     displayField: 'value',
                     valueField: 'key',
                     emptyText: '请选择',
                     allowBlank: true,
                     listeners:{
                       // specialkey:'onEnterKeyToSearch'
                     }
                 }, {
                     text: '查询',
                     iconCls: 'x-fa fa-search',
                     handler:'onSearchClick'
                  },{
                      xtype: 'tbspacer',
                      width: 10
                  }, {
                      text: '显示全部',
                      reference: 'showAll',
                      handler:'onshowAll'
                   }

            ],
            // 分页栏
          bbar: [
                {
                    xtype: 'pagingtoolbar',
                    pageSize: 20,
                    displayInfo: true,
                    emptyMsg: '没有数据',
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页',
                    bind: {
                        store: '{orderCenter}'
                    }
                },{
                     xtype: 'label',
                     itemId: 'maintableAnyInfoShow',
                     text: '',
                     style:{
                          fontSize:'20px'
                     },
                     margin: '0 0 0 10'
                }
            ],
          listeners:{
              select:'onSelect'
            }
      },

      {
        xtype:'container',
        reference:'serviceContainer',
        itemId:'serviceContainer',
        style: {
          border:'1px solid #D5D5D5'
        },
        margin:'0 0 0 5',
        // Padding: 20,
        flex: 1,
        layout:'vbox',

        items:[
          {
            // hidden:true,
            xtype:'form',
            // margin: 2,
            itemId:'orderCenterForm',
            reference:'orderCenterForm',
            padding:'10 0 0 20',
            style: {border:'1px solid #D5D5D5','background-color':'#ffffff'},
            height:270,
            layout:{
              type:'table',
              columns:3
            },
            defaults:{
              padding:10,
              minWidth:290,
              height:40
            },
            // Width:500,
            items: [{
                    html: '<font color=gray size=3pt>订单详情</font>',
                    colspan:3
                },{
                    itemId:'order_user_id',
                    text: '用户号&nbsp&nbsp&nbsp&nbsp:',
                    html: '用户号&nbsp&nbsp&nbsp&nbsp:'
                },{
                    itemId:'order_code',
                    text: '订单号&nbsp&nbsp&nbsp&nbsp:',
                    html: '订单号&nbsp&nbsp&nbsp&nbsp:'
                },{
                    itemId:'order_total_price',
                    text: '总价格&nbsp&nbsp&nbsp&nbsp:',
                    html: '总价格&nbsp&nbsp&nbsp&nbsp:'
                },{
                    itemId:'order_create_time',
                    text: '生成时间:',
                    html: '生成时间:'
                },{
                    itemId:'order_pay_time',
                    text: '付款时间:',
                    html: '付款时间:'
                },{
                    itemId:'order_status',
                    text: '订单状态:',
                    html: '订单状态:'
                },{
                    itemId:'order_remark_title',
                    text: '备注标题:',
                    html: '备注标题:'
                },{
                    itemId:'order_remark_description',
                    text: '备注描述:',
                    html: '备注描述:'
                },{
                    itemId:'order_pay_channel',
                    text: '付款频道:',
                    html: '付款频道:'
                },{
                    itemId:'order_channel',
                    text: '订单频道:',
                    html: '订单频道:'
                },{
                    itemId:'order_update_time',
                    text: '更新时间:',
                    html: '更新时间:'
                },{
                    html: ''
                },{
                    html: '',
                    height:20,
                    colspan:3
                },{
                    html: '<font color=\'gray\' size=3pt>订购服务内容</font>',
                    colspan:3
                }

              ]
          },
          // {//加载动画
          //     hidden:true,
          //     xtype: 'component',
          //     reference: 'loadingImage',
          //     padding:'170 0 0 400',
          //     html: '<div><img src="resources/images/loading.gif">加载中</div>',
          //     width: 900,
          //     height:380
          // },
          {
            xtype: 'gridpanel',
            reference:'orderServiceGrid',
            itemId:'orderServiceGrid',
            style: {
              border:'1px solid #D5D5D5'
            },
            // margin: 5,
            viewConfig: {
                preserveScrollOnRefresh: true,
                stripeRows: true
            },
            height:260,
            width:900,
            columns: [
              {
                text:'服务号',
                dataIndex:'id',
                sortable:true,
                width:150,
                hidden:true,
                align : 'center'
              },{
                text:'服务名称',
                dataIndex:'name',
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'服务号',
                dataIndex:'productId',
                sortable:true,
                width:70,
                align : 'center'
              },{
                text:'服务编码',
                dataIndex:'code',
                sortable:true,
                hidden:true,
                width:150,
                align : 'center'
              },{
                text:'服务描述',
                dataIndex:'description',
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'初始价格',
                dataIndex:'originalPrice',
                sortable:true,
                hidden:true,
                width:90,
                align : 'center'
              },{
                text:'价格',
                dataIndex:'price',
                sortable:true,
                width:90,
                align : 'center'
              },{
                text:'生成时间',
                dataIndex:'createTime',
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'更新时间',
                dataIndex:'updateTime',
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'开始时间',
                dataIndex:'startTime',
                hidden:true,
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'结束时间',
                dataIndex:'endTime',
                sortable:true,
                hidden:true,
                width:150,
                align : 'center'
              },{
                text:'可见',
                dataIndex:'flagEnable',
                sortable:true,
                hidden:true,
                width:70,
                align : 'center'
              },{
                text:'可用',
                dataIndex:'flagVisible',
                sortable:true,
                hidden:true,
                width:70,
                align : 'center'
              },{
                text:'数量',
                dataIndex:'amount',
                sortable:true,
                width:70,
                align : 'center'
              }
            ]
          },
          //log
          {
            xtype: 'gridpanel',
            reference:'orderServiceLogGrid',
            itemId:'orderServiceLogGrid',
            style: {
              border:'1px solid #D5D5D5'
            },
            // margin: 5,
            viewConfig: {
                preserveScrollOnRefresh: true,
                stripeRows: true
            },
            height:270,
            width:900,
            columns: [
              {
                text:'日志号',
                dataIndex:'id',
                sortable:true,
                hidden:true,
                width:100,
                align : 'center'
              },{
                text:'用户号',
                dataIndex:'userID',
                sortable:true,
                width:100,
                align : 'center'
              },{
                text:'订单号',
                dataIndex:'code',
                sortable:true,
                width:220,
                align : 'center'
              },{
                text:'订单状态',
                dataIndex:'status',
                sortable:true,
                width:100,
                align : 'center'
              },{
                text:'总价',
                dataIndex:'totalPrice',
                sortable:true,
                width:100,
                align : 'center'
              },{
                text:'生成时间',
                dataIndex:'createTime',
                sortable:true,
                width:150,
                align : 'center'
              },{
                text:'更新时间',
                dataIndex:'updateTime',
                sortable:true,
                width:150,
                align : 'center'
              }
            ]
          }
        ]
      }

    ]
});
