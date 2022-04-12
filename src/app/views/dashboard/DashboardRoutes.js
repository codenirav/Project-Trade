import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const Company = Loadable(lazy(() => import('../material-kit/tables/Company')))

const dashboardRoutes = [
    {
        path: '/user',
        element: <Company />,
        auth: authRoles.admin,
    },
]

export default dashboardRoutes
