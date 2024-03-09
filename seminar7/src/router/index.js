import HomePage from "@/pages/HomePage.vue";
import Project from "@/pages/Project.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
// import Blog from "@/pages/Blog.vue";
// import BlogDetails from "@/pages/BlogDetails.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
  },
  {
    path: "/ProjectDetails",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "/Blog",
    name: "Blog",
    //   component: Blog,
    component: NotFound,
  },
  {
    path: "/BlogDetails",
    name: "BlogDetails",
    //   component: BlogDetails,
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

export default routes;
