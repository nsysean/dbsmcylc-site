import { ResponsiveImage } from "@responsive-image/solid";
import "./404.css";
import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import notfoundHero from "../../public/404-hero.jpg?responsive"

export default function NotFound() {
  return (
    <main class="p3">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <div class="hero">
        <ResponsiveImage class="hero-bg" alt="404 hero" src={notfoundHero} />
        <div class="frame1"></div>
        <div class="frame2">
          <div class="frame2-title">Not Found</div>
          <div class="frame2-text">
            Oops! You've found the legendary digital void—home of lost socks,
            missing keys, and your productivity on Fridays. The page you're
            hunting for clearly took the day off. Try heading back to safer
            grounds, or just stay here and question your life choices. Your
            call!
          </div>
        </div>
      </div>
    </main>
  );
}
