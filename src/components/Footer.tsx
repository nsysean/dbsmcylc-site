import "./Footer.css";

export default function Footer() {
  return (
    <main class="footer-main">
      <div class="footer">
        <div class="frame3">
          <div class="title">DBS X MCYLC</div>
          <div class="links">
            <a class="link" href="/about">
              About us
            </a>
            <a
              class="link"
              href="https://www.youtube.com/@dbsxmcylc"
              target="_blank"
            >
              Our work
            </a>
            <a class="link" href="/blog">
              Blog
            </a>
            <a class="link" href="mailto:motherschoicedbs@gmail.com">
              Contact us
            </a>
          </div>
          <div class="socials">
            <a
              href="https://www.instagram.com/dbsmotherschoice/"
              target="_blank"
              aria-label="instagram"
            >
              <img class="social" src="/instagram.svg" alt="instagram" />
            </a>
            <a
              href="https://www.youtube.com/@dbsxmcylc"
              target="_blank"
              aria-label="youtube"
            >
              <img class="social" src="/youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>
        <div class="frame4">
          © 2025 Diocesan Boys' School. All Right Reserved.
        </div>
      </div>
    </main>
  );
}
