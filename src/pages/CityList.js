import cityList from "../utils/cityList";
import SearchSection from "../components/SearchSection";
import { useState } from "react";
function CityList() {
  const [input, setInput] = useState("qwe");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    const filter = (city) => {
      setInput(event.target.value);
      if (input != "") {
        return Object.values(city).join(" ").toLowerCase().includes(input);
      }
    };
    const newCityList = cityList.filter(filter);

    const list = newCityList.map((city) => {
      return (
        <div className="inline-flex p-2 gap-4 bg-slate-500 ">
          <div>{city.plaka}</div>
          <div>{city.il}</div>
        </div>
      );
    });
    setSearchResults(list);
    console.log(newCityList);
  };
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
        onChange={handleChange}
        type="text"
        className="py-3 px-2 bg-slate-200 mb-3"
      />
      <div className="grid grid-cols-2 gap-4 max-w-4xl md:grid-cols-3 lg:grid-cols-4">
        {searchResults}
        {input.lenght < 1}
      </div>
      <li>Deneme2</li>
    </div>
  );
}
export default CityList;
