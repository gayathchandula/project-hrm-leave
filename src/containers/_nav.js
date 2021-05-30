import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/Employee Home',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Leave Application',
    to: '/Leave Application',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Over Time',
    to: '/Employeeot',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },


]

export default _nav
