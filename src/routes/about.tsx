import { For } from "solid-js";
import "./about.css";
import { Meta, Title } from "@solidjs/meta";
import { url } from "../content/config";

const members = [
  { name: "Brandon Lee", pfp: "team-brandon.webp", role: "Service Leader" },
  { name: "Eugene Lau", pfp: "team-eugene.webp", role: "Vice Service Leader" },
  { name: "Evan Chow", pfp: "team-evan.webp", role: "Vice Service Leader" },
  { name: "Jason Ann", pfp: "team-jason.webp", role: "Host" },
  { name: "Jayden Chan", pfp: "team-jayden.webp", role: "Host" },
  { name: "Ben Kam", pfp: "team-ben.webp", role: "Host" },
  { name: "Sean Ng", pfp: "team-sean.webp", role: "Editor/Cameraman" },
  { name: "Ernest Lam", pfp: "team-ernest.webp", role: "Cameraman" },
  {
    name: "Javan Yuen",
    pfp: "team-javan.webp",
    role: "Host/Social Media Manager",
  },
];

export default function About() {
  return (
    <main class="p2">
      <Title>About | DBS Mothers Choice</Title>
      <Meta property="og:title" content="About | DBS Mothers Choice" />
      <Meta property="og:url" content={url + "/about"} />
      <Meta property="og:type" content="website" />
      <Meta
        property="og:description"
        content="About page of DBS Mothers Choice."
      />
      <Meta property="og:image" content={url + "/about-hero.webp"} />
      <Meta property="og:image:alt" content="About | DBS Mothers Choice" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:site_name" content="DBS Mothers Choice" />{" "}
      <div class="hero">
        <div class="frame1"></div>
        <div class="frame2">
          <div class="frame2-title">About us</div>
          <div class="frame2-text">
            The Diocesan Boys' School Mother's Choice Youth Leadership Council
            is part of a local charity in Hong Kong serving children without
            families and pregnant teens. We aim to promote awareness in related
            issues through self-initiated events.
          </div>
        </div>
      </div>
      <div class="team">
        <div class="team-title">Our Team</div>
        <div class="members">
          <For each={members}>
            {(member) => {
              return (
                <div class="member">
                  <img class="member-pfp" src={"/" + member.pfp}></img>
                  <div class="member-name">{member.name}</div>
                  <div class="member-role">{member.role}</div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </main>
  );
}
