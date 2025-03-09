import "./Navbar.css";
import { Show, createEffect, createSignal } from "solid-js";
import { createScrollPosition } from "@solid-primitives/scroll";

export default function Navbar() {
  const [collapse, setCollapse] = createSignal(true);
  const scroll = createScrollPosition();

  return (
    <main>
      <div
        class={
          "nav" + (scroll.y ? " nav-black" : "")
        }
      >
        <div class="nav-wrapper">
          <a href="/" onclick={() => setCollapse(true)}>
            <img
              class="nav-logo"
              src="/logo-mc.svg"
              alt="Mother's Choice logo"
            />
          </a>
          <div class="nav-group">
            <div class="nav-burger" onclick={() => setCollapse(!collapse())}>
              <Show when={collapse() === false}>
                <img src="/close.svg" alt="close nav" />
              </Show>
              <Show when={collapse()}>
                <img src="/menu.svg" alt="open nav" />
              </Show>
            </div>
            <div class="nav-btns">
              <a class="nav-btn" href="/about">
                About us
              </a>
              <a
                class="nav-btn"
                href="https://www.youtube.com/@dbsxmcylc"
                target="_blank"
              >
                Our work
              </a>
              <a class="nav-btn" href="/blog">
                Blog
              </a>
              <a
                class="nav-btn nav-btn-highlight"
                href="mailto:motherschoicedbs@gmail.com"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div class={"nav-mobile" + (collapse() ? " collapse" : "")}>
          <div class="nav-btns">
            <a class="nav-btn" href="/about" onclick={() => setCollapse(true)}>
              About us
            </a>
            <a
              class="nav-btn"
              href="https://www.youtube.com/@dbsxmcylc"
              target="_blank"
            >
              Our work
            </a>
            <a class="nav-btn" href="/blog" onclick={() => setCollapse(true)}>
              Blog
            </a>
            <a
              class="nav-btn nav-btn-highlight"
              href="mailto:motherschoicedbs@gmail.com"
              onclick={() => setCollapse(true)}
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
