import "./index.css";
import { Meta, Title } from "@solidjs/meta";
import blogs from "../content/blog";
import { url } from "../content/config";

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
        content="Landing page of DBS Mother's Choice."
      />
      <Meta name="robots" content="index, follow" />
      <Meta name="keywords" content="DBS, Mother's Choice, adoption, Home" />
      <Meta
        property="og:description"
        content="Landing page of DBS Mother's Choice."
      />
      <Meta property="og:image" content={url + "/home-hero.webp"} />
      <Meta property="og:image:alt" content="Home | DBS Mother's Choice" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:site_name" content="DBS Mother's Choice" />
      <div class="hero">
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
              We are part of the Youth Leadership Council for Mother's Choice,
              <br></br>
              dedicated to spreading awareness.
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
            <img
              class="work-thumbnail"
              src="/podcast-thumbnail.webp"
              alt="podcast-thumbnail"
            ></img>
            <div class="work-title">Podcast</div>
            <div class="work-desc">
              How Adoption is Represented in Literature
            </div>
          </a>
        </div>
        <div class="work">
          <a href="https://www.youtube.com/shorts/Za1aJVe8cYw" target="_blank">
            <img
              class="work-thumbnail"
              src="/gameshow-thumbnail.webp"
              alt="gameshow-thumbnail"
            ></img>
            <div class="work-title">Skit</div>
            <div class="work-desc">
              Who Wants To Be A Parent? — The Gameshow
            </div>
          </a>
        </div>{" "}
        <div class="work">
          <a href="https://www.youtube.com/shorts/Bv7PFLnqTdo" target="_blank">
            <img
              class="work-thumbnail"
              src="/interview-thumbnail.webp"
              alt="interview-thumbnail"
            ></img>
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
            <div
              class="preview-bg"
              style={"background-image: url(" + blog.thumbnail + ");"}
            >
              <div class="preview-info">
                <div class="preview-title">{blog.title}</div>
                <div class="preview-desc">{blog.description}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
