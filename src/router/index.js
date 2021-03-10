import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/Dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },
  {
    path: '/didmanager',
    component: Layout,
    redirect: '/didmanager',
    name: 'didmanager',
    meta: { title: '视频DID身份管理', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'didlist',
        name: 'Didlist',
        component: () => import('@/views/DIDManager/didlist'),
        meta: { title: '摄像头接入认证', icon: 'el-icon-caret-right' }
      },
      {
        path: 'didcreate',
        name: 'Didcreate',
        component: () => import('@/views/DIDManager/didcreate'),
        meta: { title: '摄像头DID注册', icon: 'el-icon-caret-right' }
      },
      {
        path: 'applyclaim',
        name: 'applyclaim',
        component: () => import('@/views/DIDManager/applyclaim'),
        meta: { title: '待审核claim', icon: 'el-icon-caret-right' }
      },
      {
        path: 'pushedcredentials',
        name: 'pushedcredentials',
        component: () => import('@/views/DIDManager/pushedcredentials'),
        meta: { title: '已发布credentials列表', icon: 'el-icon-caret-right' }
      },
      {
        path: 'personauth',
        name: 'personauth',
        component: () => import('@/views/DIDManager/personauth'),
        meta: { title: '个人配置', icon: 'el-icon-caret-right' }
      },
      {
        path: 'didman',
        name: 'didman',
        component: () => import('@/views/DIDManager/didman'),
        meta: { title: 'DID管理（管理员）', icon: 'el-icon-caret-right' }
      }
    ]
  },
  {
    path: '/DIDManager',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'didregister',
        component: () => import('@/views/DIDManager/didregister'),
        name: 'didregister',
        meta: { title: '授权机构DID管理', icon: 'el-icon-caret-right', noCache: true }
      }
    ]
  },
  {
    path: '/TechnicalMethods',
    component: Layout,
    children: [
      {
        path: 'TechnicalMethods',
        component: () => import('@/views/TechnicalMethods/index'),
        name: 'Technicalethods',
        meta: { title: '技战法', icon: 'tree-table', noCache: true }
      }
    ]
  },
  {
    path: '/VideoFunction',
    component: Layout,
    //redirect: '/example/table',
    name: 'Video Function',
    meta: { title: '视频功能', icon: 'star' },
    children: [
      {
        path: 'VideoInquire',
        name: 'VideoInquire',
        component: () => import('@/views/VideoFunction/VideoInquire/index'),
        meta: { title: '视频查询', icon: 'search' }
      },
      {
        path: 'VideoAnalyze',
        name: 'VideoAnalyze',
        component: () => import('@/views/VideoFunction/VideoAnalyze/index'),
        meta: { title: '视频分析', icon: 'documentation' }
      },
      {
        path: 'VideoCheck',
        name: 'VideoCheck',
        component: () => import('@/views/VideoFunction/VideoCheck/index'),
        meta: { title: '视频查看', icon: 'eye-open' }
      }
    ]
  },
  {
    path: '/Document',
    component: Layout,
    redirect: '/document',
    name: 'document',
    meta: { title: '一人一档', icon: 'el-icon-document' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/document/index'),
        name: 'documentindex',
        meta: { title: '档案分析', icon: 'el-icon-caret-right', noCache: true }
      },
      {
        path: 'mandetail',
        component: () => import('@/views/document/mandetail'),
        name: 'mandetail',
        meta: { title: '嫌疑人详情', icon: 'el-icon-caret-right', noCache: true }
      },
      {
        path: 'summary',
        name: 'summary',
        component: () => import('@/views/document/summary/index'),
        meta: { title: '档案汇总', icon: 'el-icon-menu' }
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/document/summary/index'),
        meta: { title: '档案详情', icon: 'el-icon-menu' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/videoplayer',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Videoplayer',
        component: () => import('@/views/VideoPlayer/index'),
        meta: { title: '视频播放', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
