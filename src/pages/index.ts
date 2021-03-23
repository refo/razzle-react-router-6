import loadable from "@loadable/component";

export const Home = loadable(() => import('pages/Home'));
export const Example1 = loadable(() => import('pages/Example1'));
export const Example2 = loadable(() => import('pages/Example2'));
export const Error404 = loadable(() => import('pages/Error404'));
