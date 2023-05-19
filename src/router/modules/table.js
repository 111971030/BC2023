/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/management',
  component: Layout,
  redirect: '/management/groupManagement',
  name: 'Management',
  meta: {
    title: 'Management',
    icon: 'documentation'
  },
  children: [
    // {
    //   path: 'dynamic-table',
    //   component: () => import('@/views/table/dynamic-table/index'),
    //   name: 'DynamicTable',
    //   meta: { title: 'Dynamic Table' }
    // },
    // {
    //   path: 'drag-table',
    //   component: () => import('@/views/table/drag-table'),
    //   name: 'DragTable',
    //   meta: { title: 'Drag Table' }
    // },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: { title: 'Inline Edit' }
    // },
    {
      path: 'groupManagement',
      component: () => import('@/views/table/groupManagement'),
      name: 'Group Management',
      meta: { title: 'Group Management' }
    }

    // {
    //   path: 'assetManagement',
    //   component: () => import('@/views/table/assetManagement'),
    //   name: 'Asset Management',
    //   meta: { title: 'Asset Management' }
    // }
  ]
}
export default tableRouter
