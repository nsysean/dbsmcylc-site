import "./index.css";
import { Meta, Title } from "@solidjs/meta";
import blogs from "../content/blog";
import { url } from "../content/config";
import { ResponsiveImage } from "@responsive-image/solid";
import podcastImage from "../../public/podcast-thumbnail.jpg?responsive";
import gameshowImage from "../../public/gameshow-thumbnail.jpg?responsive";
import interviewImage from "../../public/interview-thumbnail.jpg?responsive";
import homeHero from "../../public/home-hero.jpg?responsive";

const blog = blogs[blogs.length - 1];

export default function Home() {
  return (
    <main class="p1">
      <Title>Home | DBS Mother's Choice</Title>
      <Meta property="og:title" content="Home | DBS Mother's Choice" />
      <Meta property="og:url" content={url + "/"} />
      <link rel="canonical" href={url + "/"}></link>
      <Meta property="og:type" content="website" />
      <Meta
        name="description"
        content="DBS Mother's Choice Youth Leadership Council is a part of Mother's Choice, dedicated to spreading awareness through media."
      />
      <Meta name="robots" content="index, follow" />
      <Meta name="keywords" content="DBS, Mother's Choice, adoption, Home" />
      <Meta
        property="og:description"
        content="DBS Mother's Choice Youth Leadership Council is a part of Mother's Choice, dedicated to spreading awareness through media."
      />
      <Meta property="og:image" content={url + "/home-hero.jpg"} />
      <Meta property="og:image:alt" content="Home | DBS Mother's Choice" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta property="og:site_name" content="DBS Mother's Choice" />
      <div class="hero">
        <ResponsiveImage class="hero-bg" alt="home hero" src={homeHero} />
        <div class="frame1">
          <div class="frame1-text">
            <span class="highlight">
              Raising<br></br>Awareness
            </span>{" "}
            for<br></br>Lasting Change
          </div>
        </div>
        <div class="frame2">
          <div class="frame2-title">About</div>
          <div class="frame2-text">
            <span>
              DBS Mother's Choice Youth Leadership Council is a part of Mother's
              Choice,
              <br></br>
              dedicated to spreading awareness through media.
            </span>
            <div class="frame2-btn">
              <a href="/about">More about us</a>
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-title">2</div>
          <div class="card-desc">Monthly videos</div>
        </div>
        <div class="card">
          <div class="card-title">1,000+</div>
          <div class="card-desc">Average views per video</div>
        </div>{" "}
        <div class="card">
          <div class="card-title">7,000+</div>
          <div class="card-desc">Views on social media</div>
        </div>{" "}
        <div class="card">
          <div class="card-title">100+</div>
          <div class="card-desc">Followers across platforms</div>
        </div>
      </div>
      <div class="works">
        <div class="works-info">
          <div class="works-wrapper">
            <div class="works-title">Our works</div>
            <div class="works-desc">
              Includes both long and short form videos centered around the
              advocacy of adoption!
              <div class="works-link">
                <a href="https://www.youtube.com/@dbsxmcylc">
                  Click here to view more.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <a href="https://www.youtube.com/watch?v=36DKaJ4ayGQ" target="_blank">
            <ResponsiveImage
              class="work-thumbnail"
              src={podcastImage}
              alt="podcast-thumbnail"
            />
            <div class="work-title">Podcast</div>
            <div class="work-desc">
              How Adoption is Represented in Literature
            </div>
          </a>
        </div>
        <div class="work">
          <a href="https://www.youtube.com/shorts/Za1aJVe8cYw" target="_blank">
            <ResponsiveImage
              class="work-thumbnail"
              src={gameshowImage}
              alt="gameshow-thumbnail"
            />
            <div class="work-title">Skit</div>
            <div class="work-desc">
              Who Wants To Be A Parent? — The Gameshow
            </div>
          </a>
        </div>{" "}
        <div class="work">
          <a href="https://www.youtube.com/shorts/Bv7PFLnqTdo" target="_blank">
            <ResponsiveImage
              class="work-thumbnail"
              src={interviewImage}
              alt="interview-thumbnail"
            />
            <div class="work-title">Interview</div>
            <div class="work-desc">
              What Does It Take To Become A Good Adoptive Parent?
            </div>
          </a>
        </div>
      </div>
      <div class="preview">
        <a href={"/blog/" + blog.slug}>
          <div class="preview-wrapper">
            <ResponsiveImage
              class="preview-bg"
              alt="blog preview"
              src={blog.image}
            />
            <div class="preview-info">
              <div class="preview-title">{blog.title}</div>
              <div class="preview-desc">
                {blog.description.split(" ").length > 20
                  ? blog.description.split(" ").slice(0, 20).join(" ") + "..."
                  : blog.description}
              </div>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
