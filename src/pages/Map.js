import { useRef, useState } from "react";
import TurkeySvg from "../components/TurkeySvg";

function App() {
  const infoo = useRef();
  const mapElem = useRef();
  const [info, setInfo] = useState("");
  const handleMouse = (event) => {
    infoo.current.style.left = event.clientX + 25 + "px";
    infoo.current.style.top = event.clientY + 0 + "px";
    setInfo(event.target.parentNode.getAttribute("data-iladi"));
  };
  return (
    <div className="App">
      <div
        ref={infoo}
        className="relative inline-block text-white bg-teal-400 "
      >
        {info}
      </div>
      <TurkeySvg useRef={mapElem} handleMouse={handleMouse} />
    </div>
  );
}

export default App;
