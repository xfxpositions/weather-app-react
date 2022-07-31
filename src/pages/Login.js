import { useDispatch, useSelector } from "react-redux";
import { setkey } from "../stores/loginSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target[0].value;
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=kocaeli&appid=${input}`
    );
    console.log(await req);
    if ((await req.status) == 401) {
      setError("Api Keyinizi Kontrol Ediniz");
    } else {
      setError("");
      dispatch(setkey(input));
      navigate("/map", { replace: true });
    }
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label className="relative flex">
          <input
            type="text"
            class="peer mt-2 rounded-lg bg-teal-400 py-3 px-2 text-white outline-none transition-all duration-150 ease-in-out focus:bg-teal-500"
            required
          />
          <span className="material-symbols-outlined qwe fa-solid fa-circle-exclamation ml-4 mt-3  peer-required:text-red-700 peer-valid:text-blue-700">
            {" "}
            done{" "}
          </span>
          <small className="l-0 pointer-events-none absolute top-1/3 ml-2 text-base text-white transition-all duration-300 ease-in-out peer-valid:opacity-0 peer-focus:scale-[83.333%]">
            Enter Your Api Key...
          </small>
        </label>
        <button class="p-4 transition-all rounded-lg shadow-lg outline-2 outline-teal-500 ease-in-out duration-300 hover:text-white hover:bg-teal-400 ">
          Send
        </button>
        <h1>{error}</h1>
      </form>
    </div>
  );
}
