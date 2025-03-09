import "./index.css";
import blogs from "../../content/blog";
import { For } from "solid-js";
import { A } from "@solidjs/router";
import { Meta, Title } from "@solidjs/meta";
import { url } from "../../content/config";
import { ResponsiveImage } from "@responsive-image/solid";
import blogHero from "../../../public/blog-hero.jpg?responsive";

// no pagination because we will never write that many

export default function Blogs() {
  return (
    <main class="p5">
      <Title>Blog | DBS Mother's Choice</Title>
      <Meta property="og:title" content="Blog | DBS Mother's Choice" />
      <Meta property="og:url" content={url + "/blog"} />
      <link rel="canonical" href={url + "/blog"}></link>
      <Meta property="og:type" content="website" />
      <Meta name="description" content="Read our meticulously crafted writings from the interviews, podcasts we've done to learn more about adoption." />
      <Meta name="robots" content="index, follow" />
      <Meta
        name="keywords"
        content="DBS, Mother's Choice, adoption, blogs, blog"
      />
      <Meta
        property="og:description"
        content="Read our meticulously crafted writings from the interviews, podcasts we've done to learn more about adoption."
      />
      <Meta property="og:image" content={url + "/blog-hero.jpg"} />
      <Meta property="og:image:alt" content="Blog | DBS Mother's Choice" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="og:site_name" content="DBS Mother's Choice" />
      <div class="hero">
        <ResponsiveImage class="hero-bg" alt="blog hero" src={blogHero} />
        <div class="frame1"></div>
        <div class="frame2">
          <div class="frame2-title">Blogs</div>
          <div class="frame2-text">Read our meticulously crafted writings.</div>
        </div>
      </div>
      <div class="blogs">
        <For each={blogs}>
          {(blog) => {
            return (
              <a href={"/blog/" + blog.slug}>
                <div class="blog">
                  <div class="blog-title">{blog.title}</div>
                  <div class="blog-date">{blog.publishDate}</div>
                  <div class="blog-desc">{blog.description}</div>
                </div>
              </a>
            );
          }}
        </For>
      </div>
    </main>
  );
}
