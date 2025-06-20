import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return <h1 className="text-3xl underline text-red-500">Hello</h1>;
};

export default App;
