import { For } from "solid-js";
import "./about.css";
import { Title } from "@solidjs/meta";

const members = [
  { name: "Brandon Lee", pfp: "team-brandon.png", role: "Service Leader" },
  { name: "Eugene Lau", pfp: "team-eugene.png", role: "Vice Service Leader" },
  { name: "Evan Chow", pfp: "team-evan.png", role: "Vice Service Leader" },
  { name: "Jason Ann", pfp: "team-jason.png", role: "Host" },
  { name: "Jayden Chan", pfp: "team-jayden.png", role: "Host" },
  { name: "Ben Kam", pfp: "team-ben.jpg", role: "Host" },
  { name: "Sean Ng", pfp: "team-sean.webp", role: "Editor/Cameraman" },
  { name: "Ernest Lam", pfp: "team-ernest.png", role: "Cameraman" },
  {
    name: "Javan Yuen",
    pfp: "team-javan.png",
    role: "Host/Social Media Manager",
  },
];

export default function About() {
  return (
    <main class="p2">
      <Title>About</Title>
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
