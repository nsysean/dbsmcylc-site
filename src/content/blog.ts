import * as blog1 from "../routes/blog/adoption-in-pop-culture.mdx";
import * as blog2 from "../routes/blog/adoption-in-literature.mdx";
import imageBlog1 from "../../public/blog1-hero.jpg?responsive";
import imageBlog2 from "../../public/blog2-hero.jpg?responsive";

export default [
  { ...blog1, image: imageBlog1 },
  { ...blog2, image: imageBlog2 },
];
