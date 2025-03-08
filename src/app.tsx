import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <Navbar></Navbar>
          <Suspense>{props.children}</Suspense>
          <Footer></Footer>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
