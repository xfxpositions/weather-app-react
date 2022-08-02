import cityList from "../utils/cityList";
import SearchSection from "../components/SearchSection";
import { useState } from "react";
function CityList() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {};
  const list = cityList.map((city) => {
    return (
      <div className="inline-flex p-2 gap-4 bg-slate-500 ">
        <div>{city.plaka}</div>
        <div>{city.il}</div>
      </div>
    );
  });

  return (
    <div className="grid items-center text-center justify-center place-content-center">
      <input
        value={input}
        type="text"
        className="py-3 px-2 outline-none focus:outline-slate-700 bg-slate-200 mb-3"
      />
      <p>{input}</p>
      <div className="grid grid-cols-2 gap-4 max-w-4xl md:grid-cols-3 lg:grid-cols-4">
        {searchResults}
      </div>
      <li>Deneme2</li>
    </div>
  );
}
export default CityList;
