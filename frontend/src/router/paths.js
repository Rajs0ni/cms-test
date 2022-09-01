
import DEFINES from '@/defines';

import CmsHome from '@/pages/cms/Home';
import CmsPage from '@/pages/cms/Page';

export default [
    {
        path: '/',
        name: 'cms.home',
        meta: {
            layout: DEFINES.LAYOUT_GUEST,
            public: true,
        },
        component: CmsHome,
    },
    {
        path: '/:slug',
        name: 'cms.page',
        meta: {
            layout: DEFINES.LAYOUT_GUEST,
            public: true,
        },
        component: CmsPage,
    },
]