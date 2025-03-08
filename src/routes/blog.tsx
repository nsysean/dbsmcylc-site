import "./blog.css";
import {
  createAsync,
  query,
  RouteDefinition,
  RouteSectionProps,
  useLocation,
} from "@solidjs/router";
import slugify from "slugify";
import { createEffect, createMemo, createResource, createSignal, Show } from "solid-js";
import blogs from "../content/blog";

interface BlogPost {
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  thumbnail: string;
}

export default function BlogLayout(props: RouteSectionProps) {
  const blog = createMemo(() => {
    const pathSegments = props.location.pathname.split("/");
    const slug = pathSegments[pathSegments.length - 1];
    return blogs.find(blog => blog.slug === slug);
  });

  return (
    <div>
      <Show when={props.location.pathname !== "/blog"}>
        <main class="p4">
          <div
            class="hero"
            style={"background-image: url(" + blog()?.thumbnail + ");"}
          >
            <div class="frame1"></div>
            <div class="frame2">
              <div class="frame2-title">{blog()?.title}</div>
              <div class="frame2-text">
                {(blog()?.tags?.length ? "#" : "") + blog()?.tags?.join(" #")}
                <br></br>
                {blog()?.description}
              </div>
            </div>
          </div>
          <div class="blog">{props.children}</div>
        </main>
      </Show>
      <Show when={props.location.pathname === "/blog"}>{props.children}</Show>
    </div>
  );
}
