import {createRouter, createWebHistory} from "vue-router";
import MainPage from '@/pages/MainPage'
import PostsPage from "@/pages/PostsPage";

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
];

const router = new createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
