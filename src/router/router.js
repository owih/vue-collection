import {createRouter, createWebHistory} from "vue-router";
import MainPage from '@/pages/MainPage'
import PostsPage from "@/pages/PostsPage";
import TicTac from "@/pages/TicTac";
import SoonPage from "@/pages/SoonPage";

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/tictac',
    component: TicTac,
  },
  {
    path: '/soon',
    component: SoonPage,
  },
];

const router = new createRouter({
  routes,
  history: createWebHistory('/vue-collection/'),
});

export default router;
