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
      meta: { title: '主页', icon: 'host_icon', icon1: require('../assets/nav_icon/host_icon_up.png') }
    }]
  },
  {
    path: '/didmanager',
    component: Layout,
    redirect: '/didmanager',
    name: 'didmanager',
    meta: { title: 'DID身份管理', icon: 'didmanager_icon' },
    children: [
      {
        path: 'didlist',
        name: 'Didlist',
        component: () => import('@/views/DIDManager/didlist'),
        meta: { title: '已入网摄像头', icon: 'el-icon-caret-right' }
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
        meta: { title: '摄像头入网申请', icon: 'el-icon-caret-right' }
      },
      {
        path: 'pushedcredentials',
        name: 'pushedcredentials',
        component: () => import('@/views/DIDManager/pushedcredentials'),
        meta: { title: '摄像头入网证书', icon: 'el-icon-caret-right' }
      },
      {
        path: 'personauth',
        hidden: true,
        name: 'personauth',
        component: () => import('@/views/DIDManager/personauth'),
        meta: { title: '个人配置', icon: 'el-icon-caret-right' }
      },
      // {
      //   path: 'CRTManage',
      //   name: 'CRTManage',
      //   component: () => import('@/views/DIDManager/CRTManage'),
      //   meta: { title: 'CRT模板管理', icon: 'el-icon-caret-right' }
      // },
      {
        path: 'didman',
        name: 'didman',
        component: () => import('@/views/DIDManager/didman'),
        meta: { title: '系统DID管理', icon: 'el-icon-caret-right' }
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
    path: '/VideoFunction',
    component: Layout,
    redirect: '/VideoInquire',
    name: 'Video Function',
    meta: { title: '视频功能', icon: 'VideoFunction_icon' },
    children: [
      {
        path: 'VideoInquire',
        name: 'VideoInquire',
        component: () => import('@/views/VideoFunction/VideoInquire/index'),
        meta: { title: '视频浏览', icon: 'search' }
      },
      {
        path: 'VideoAnalyze',
        name: 'VideoAnalyze',
        component: () => import('@/views/VideoFunction/VideoAnalyze/index'),
        meta: { title: '视频分析', icon: 'documentation' }
      },
      {
        path: 'VideoPlay',
        name: 'VideoPlay',
        component: () => import('@/views/VideoFunction/VideoPlay/index'),
        meta: { title: '视频播放', icon: 'eye-open' }
      }
    ]
  },
  {
    path: '/Document',
    component: Layout,
    redirect: '/document',
    name: 'document',
    meta: { title: '一人一档', icon: 'document_icon' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/document'),
        name: 'documentindex',
        meta: { title: '档案分析', icon: 'el-icon-caret-right', noCache: true }
      },
      {
        path: 'mandetail',
        component: () => import('@/views/document/detail/mandetail'),
        name: 'mandetail',
        meta: { title: '档案详情', icon: 'el-icon-menu', noCache: true }
      },
      {
        path: 'summary',
        name: 'summary',
        component: () => import('@/views/document/summary/index'),
        meta: { title: '档案汇总', icon: 'el-icon-menu' }
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/document/search/index'),
        meta: { title: '档案查找', icon: 'search' }
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
        meta: { title: '个人资料', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/taskManager',
    component: Layout,
    redirect: '/taskManager',
    meta: { title: '任务管理', icon: 'taskManager_icon', noCache: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/taskManager/index'),
        name: 'taskManager',
        meta: { title: '任务管理', icon: 'el-icon-s-tools', noCache: true }
      },
      {
        path: 'taskcreate',
        hiden: true,
        component: () => import('@/views/taskManager/taskCreate/index'),
        name: 'taskCreate',
        meta: { title: '任务创建', icon: 'el-icon-s-tools', noCache: true }
      },
      {
        path: 'TechnicalMethods',
        component: () => import('@/views/TechnicalMethods/index'),
        name: 'TechnicalMethods',
        meta: { title: '技战法', icon: 'tree-table', noCache: true }
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
