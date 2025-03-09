import { For } from "solid-js";
import "./about.css";
import { Meta, Title } from "@solidjs/meta";
import { url } from "../content/config";
import teamBrandon from "../../public/team-brandon.jpg?responsive";
import teamEugene from "../../public/team-eugene.jpg?responsive";
import teamEvan from "../../public/team-evan.jpg?responsive";
import teamJason from "../../public/team-jason.jpg?responsive";
import teamJayden from "../../public/team-jayden.jpg?responsive";
import teamBen from "../../public/team-ben.jpg?responsive";
import teamSean from "../../public/team-sean.jpg?responsive";
import teamErnest from "../../public/team-ernest.jpg?responsive";
import teamJavan from "../../public/team-javan.jpg?responsive";
import aboutHero from "../../public/about-hero.jpg?responsive";
import { ResponsiveImage } from "@responsive-image/solid";

const members = [
  {
    name: "Brandon Lee",
    pfp: teamBrandon,
    role: "Service Leader",
  },
  {
    name: "Eugene Lau",
    pfp: teamEugene,
    role: "Vice Service Leader",
  },
  {
    name: "Evan Chow",
    pfp: teamEvan,
    role: "Vice Service Leader",
  },
  { name: "Jason Ann", pfp: teamJason, role: "Host" },
  { name: "Jayden Chan", pfp: teamJayden, role: "Host" },
  { name: "Ben Kam", pfp: teamBen, role: "Host" },
  {
    name: "Sean Ng",
    pfp: teamSean,
    role: "Editor/Cameraman",
  },
  { name: "Ernest Lam", pfp: teamErnest, role: "Cameraman" },
  {
    name: "Javan Yuen",
    pfp: teamJavan,
    role: "Host/Social Media Manager",
  },
];

export default function About() {
  return (
    <main class="p2">
      <Title>About | DBS Mother's Choice</Title>
      <Meta property="og:title" content="About | DBS Mother's Choice" />
      <Meta property="og:url" content={url + "/about"} />
      <link rel="canonical" href={url + "/about"}></link>
      <Meta property="og:type" content="website" />
      <Meta name="description" content="The Diocesan Boys' School Mother's Choice Youth Leadership Council is part of a local charity in Hong Kong serving children without families and pregnant teens. We aim to promote awareness in related issues through self-initiated events." />
      <Meta name="robots" content="index, follow" />
      <Meta name="keywords" content="DBS, Mother's Choice, adoption, About" />
      <Meta
        property="og:description"
        content="The Diocesan Boys' School Mother's Choice Youth Leadership Council is part of a local charity in Hong Kong serving children without families and pregnant teens. We aim to promote awareness in related issues through self-initiated events."
      />
      <Meta property="og:image" content={url + "/about-hero.jpg"} />
      <Meta property="og:image:alt" content="About | DBS Mother's Choice" />
      <Meta property="og:site_name" content="DBS Mother's Choice" />{" "}
      <div class="hero">
        <ResponsiveImage class="hero-bg" alt="about hero" src={aboutHero} />
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
                  <ResponsiveImage
                    class="member-pfp"
                    alt={member.name}
                    src={member.pfp}
                  />
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
