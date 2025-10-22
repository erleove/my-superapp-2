import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LayoutProvider } from "@/app/providers/layout";
import { GridBase } from "@/pages/gridBase";
import { FlexBase } from "@/pages/flexBase";
import { Insta } from "@/pages/insta";

const router = createBrowserRouter([{
  path: 'my-superapp-2',
  children: [
  { index: true, element: <HomePage /> },
  {
    path: "grid-base",
    element: (
      <LayoutProvider>
        <GridBase />
      </LayoutProvider>
    ),
  },
  { path: "flex-base",  element: (
      <LayoutProvider>
        <FlexBase />
      </LayoutProvider>
    ), },
  { path: "insta",  element: (
      <LayoutProvider>
        <Insta />
      </LayoutProvider>
    ), },
]}]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
