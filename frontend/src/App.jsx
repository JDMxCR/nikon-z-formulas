import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ShowFormulas from "./pages/ShowFormulas";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="bg-neutral-900">
      <NavBar />
      <ShowFormulas />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
