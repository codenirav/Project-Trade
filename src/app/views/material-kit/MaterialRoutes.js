import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const PaginationTable = Loadable(lazy(() => import("./tables/PaginationTable")));
const Company = Loadable(lazy(() => import("./tables/Company")));
const PartyType = Loadable(lazy(() => import("./tables/PartyType")));
const ProductType = Loadable(lazy(() => import("./tables/ProductType")));


const materialRoutes = [
    {
        path: '/user',
        element: <PaginationTable />,
    },
    {
        path: '/company',
        element: <Company />,
    },
    {
        path: '/party',
        element: <PartyType />,
    },
    {
        path: '/product',
        element: <ProductType />,
    },

]

export default materialRoutes
