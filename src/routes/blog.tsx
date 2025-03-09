import "./blog.css";
import {
  createAsync,
  query,
  RouteDefinition,
  RouteSectionProps,
  useLocation,
} from "@solidjs/router";
import slugify from "slugify";
import {
  createEffect,
  createMemo,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";
import blogs from "../content/blog";
import { Meta, Title } from "@solidjs/meta";
import { url } from "../content/config";

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
    return blogs.find((blog) => blog.slug === slug);
  });

  return (
    <div>
      <Show when={props.location.pathname !== "/blog"}>
        <Title>{blog()?.title} | Blog | DBS Mothers Choice</Title>
        <Meta
          property="og:title"
          content={blog()?.title + " | Blog | DBS Mothers Choice"}
        />
        <Meta property="og:url" content={url + "/blog/" + blog()?.slug} />
        <link rel="canonical" href={url + "/blog/" + blog()?.slug}></link>
        <Meta property="og:type" content="article" />
        <Meta
          property="og:article:published_time"
          content={blog()?.publishDate}
        />
        <Meta property="og:article:author" content="DBS Mothers Choice" />
        <Meta property="og:article:section" content="Adoption" />
        <For each={blog()?.tags}>
          {(tag) => {
            return <Meta property="og:article:tag" content={tag ?? ""} />;
          }}
        </For>
        <Meta property="og:description" content={blog()?.description} />
        <Meta property="og:image" content={url + blog()?.thumbnail} />
        <Meta
          property="og:image:alt"
          content={blog()?.title + " | Blog | DBS Mothers Choice"}
        />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="630" />
        <Meta property="og:site_name" content="DBS Mothers Choice" />
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
