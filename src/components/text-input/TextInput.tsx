import React from "react";
import { getList } from "../../api";
import Search from "../../assets/search.png";

import "./TextInput.css";

type TextInputProps = {
  value: string;
  onChange: (event: React.SetStateAction<string>) => void;
};

export default function TextInput({ value, onChange }: TextInputProps) {

  const [searchArea, setSearchArea] = React.useState(true);
  const search = () =>{
    getList().then(data => {
      console.log(data);

    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setSearchArea(false);
    })

    setSearchArea(prev => !prev);
  }
  return (
    <div className="text-input">
      <div>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={searchArea ? "search-area" : "search-area-disabled"}
        disabled={searchArea? false : true}
      />
      </div>
      <button onClick={search}>
        <img src={Search} alt="search button" className="h100" />
      </button>
    </div>
  );
}
