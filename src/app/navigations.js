export const navigations = [
    {
        name: 'Dashboard',
        path: '/user',
        icon: 'dashboard',
    },
    {
        name: 'Sale',
        path: '/user',
        icon: 'dashboard',
    },
    {
        name: 'Purchase',
        path: '/user',
        icon: 'dashboard',
    },
    {
        name: 'Master',
        icon: 'security',
        children: [
            {
                name: 'User',
                iconText: 'Ur',
                path: '/user',
            },
            {
                name: 'Company',
                iconText: 'Co',
                path: '/company',
            },
            {
                name: 'Party',
                iconText: 'Pt',
                path: '/party',
            },
            {
                name: 'Product',
                iconText: 'Pro',
                path: '/product',
            },
        ],
    },
]
