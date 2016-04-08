Ext.define('serviceCenter.boot.view.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',

    requires: [
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        // 工具栏
        {
            xtype: 'toolbar',
            cls: 'application-main-header application-main-header-shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                // 产品标示
                {
                    xtype: 'component',
                    reference: 'applicationLogo',
                    cls: 'application-main-header-logo',
                    html: '<div class="main-logo"><img src="resources/images/logo.png">服务中心</div>',
                    width: 200
                },
                // 导航按钮
                {
                    margin: '0 0 0 8',
                    cls: 'application-main-header-button',
                    iconCls: 'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                // '->'
                {
                    xtype: 'tbspacer',
                    flex: 1
                }
                //,
                // 搜索按钮
                // {
                //     cls: 'application-main-header-button',
                //     iconCls: 'x-fa fa-search',
                //     tooltip: '搜索'
                // },
                // // 邮件按钮
                // {
                //     cls: 'application-main-header-button',
                //     iconCls: 'x-fa fa-envelope',
                //     tooltip: '消息'
                // },
                // // 配置按钮
                // {
                //     cls: 'application-main-header-button',
                //     iconCls: 'x-fa fa-th-large',
                //     tooltip: '配置'
                // },
                // // 用户姓名
                // {
                //     xtype: 'tbtext',
                //     text: '用户姓名'
                // }
                ,
                //用户头像
                {
                    xtype: 'image',
                    cls: 'application-main-header-image',
                    height: 35,
                    width: 35,
                    alt: 'user',
                    src: 'resources/images/user-profile/2.png'
                }
            ]
        },

        // 功能区: 包含导航栏、操作区
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                // 导航栏
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'application-main-avigation',
                    width: 200,
                    expanderFirst: false,
                    expanderOnly: false,
                    store: 'NavigationTree',
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },

                // 操作区
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
