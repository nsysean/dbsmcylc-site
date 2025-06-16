import * as blog2 from "../routes/blog/adoption-in-literature.mdx";
import * as blog3 from "../routes/blog/adoption-in-history.mdx";
import imageBlog2 from "../../public/blog2-hero.jpg?responsive";
import imageBlog3 from "../../public/blog3-hero.jpg?responsive";

export default [
  { ...blog2, image: imageBlog2 },
  { ...blog3, image: imageBlog3 }
];
