import DEFINES from "@/defines";

// Pages
import PageRoot from "../pages/page/Root";
import PageList from "../pages/page/List";
import PageSave from "../pages/page/Save";

export default [
  {
    path: "/",
    redirect:"/page/list",
    name: "Home",
    meta: {
      public: true,
    },
  },
  /* Pages */
  {
    path: "/page",
    name: "page",
    component: PageRoot,
    meta: {
      layout: DEFINES.LAYOUT_APP,
    },
    children: [
      {
        path: "list",
        name: "page.list",
        meta: {
          layout: DEFINES.LAYOUT_APP,
        },
        component: PageList,
      },
      {
        path: "create",
        name: "page.create",
        meta: {
          layout: DEFINES.LAYOUT_APP,
        },
        component: PageSave,
      },
      {
        path: "save/:page_id",
        name: "page.save",
        meta: {
          layout: DEFINES.LAYOUT_APP,
        },
        component: PageSave,
      },
    ],
  },
]