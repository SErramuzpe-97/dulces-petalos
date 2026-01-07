import CommonLayout from "../layouts/CommonLayout";
import Home from "../components/Home";
import Detail from "../components/Detail";
import NotFound from "../components/NotFound";

export const routes = [
  {
    path: '*',
    exact: false,
    layout: CommonLayout,   
    component: NotFound,
  },
  {
    path: '/',
    exact: true,
    layout: CommonLayout,   
    component: Home,
  },
  {
    path: '/detail/:id',
    exact: true,
    layout: CommonLayout,   
    component: Detail,
  }
]