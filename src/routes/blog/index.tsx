import "./index.css";
import blogs from "../../content/blog";
import { For } from "solid-js";
import { A } from "@solidjs/router";
import { Meta, Title } from "@solidjs/meta";
import { url } from "../../content/config";

// no pagination because we will never write that many

export default function Blogs() {
  return (
    <main class="p5">
      <Title>Blog | DBS Mothers Choice</Title>
      <Meta property="og:title" content="Blog | DBS Mothers Choice" />
      <Meta property="og:url" content={url + "/blog"} />
      <link rel="canonical" href={url + "/blog"}></link>
      <Meta property="og:type" content="website" />
      <Meta
        property="og:description"
        content="Blogs from DBS Mothers Choice."
      />
      <Meta property="og:image" content={url + "/blog-hero.webp"} />
      <Meta property="og:image:alt" content="Blog | DBS Mothers Choice" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:site_name" content="DBS Mothers Choice" />
      <div class="hero">
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
