import * as React from "react";
import type { ReactNode } from "react";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../components/Home";
import Detail from "../components/Detail";
import NotFound from "../components/NotFound";
import { Navigate } from "react-router-dom";

const NoLayout = ({ children }: { children: ReactNode }) => children;

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
    layout: NoLayout,
    component: () => React.createElement(Navigate, { to: "/products", replace: true }),
  },
  {
    path: '/products',
    exact: true,
    layout: CommonLayout,
    component: Home,
  },
  {
    path: '/products/:id/detail',
    exact: true,
    layout: CommonLayout,   
    component: Detail,
  }
] 
