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
import { ResponsiveImage } from "@responsive-image/solid";

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
        <Title>{blog()?.title} | Blog | DBS Mother's Choice</Title>
        <Meta
          property="og:title"
          content={blog()?.title + " | Blog | DBS Mother's Choice"}
        />
        <Meta property="og:url" content={url + "/blog/" + blog()?.slug} />
        <link rel="canonical" href={url + "/blog/" + blog()?.slug}></link>
        <Meta property="og:type" content="article" />
        <Meta name="description" content={blog()?.description} />
        <Meta name="robots" content="index, follow" />
        <Meta
          name="keywords"
          content={[
            "DBS",
            "Mother's Choice",
            "adoption",
            ...(blog()?.tags ?? []),
          ].join(", ")}
        />
        <Meta
          property="og:article:published_time"
          content={blog()?.publishDate}
        />
        <Meta property="og:article:author" content="DBS Mother's Choice" />
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
          content={blog()?.title + " | Blog | DBS Mother's Choice"}
        />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta property="og:site_name" content="DBS Mother's Choice" />
        <main class="p4">
          <div class="hero">
            <ResponsiveImage
              class="hero-bg"
              alt="blog hero"
              src={blog()?.image}
            />
            <div class="frame1"></div>
            <div class="frame2">
              <div class="frame2-title">{blog()?.title}</div>
              <div class="frame2-text">
                {(blog()?.tags?.length ? "#" : "") + blog()?.tags?.join(" #")}
                <br></br>
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
