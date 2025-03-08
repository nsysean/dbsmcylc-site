import "./index.css";
import blogs from "../../content/blog";
import { For } from "solid-js";
import { A } from "@solidjs/router";

// no pagination because we will never write that many

export default function Blogs() {
  return (
    <main class="p5">
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
