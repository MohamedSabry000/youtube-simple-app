import React, { useContext, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { YoutubeContextType } from "../../@types/youtube";
import { getList } from "../../api";
import Search from "../../assets/search.png";
import { YoutubeContext } from "../../context/YoutubeContext";

import "./TextInput.css";

type TextInputProps = {
  value: string;
  onChange: (event: React.SetStateAction<string>) => void;
};

export default function TextInput({ value, onChange }: TextInputProps) {
  const { saveVideos, setLoad } = useContext(
    YoutubeContext
  ) as YoutubeContextType;
  const [searchArea, setSearchArea] = React.useState(true);
  const textInput = useRef<HTMLInputElement>(null);
  const matches = useMediaQuery("(max-width: 768px)");

  const search = () => {
    if (searchArea || !matches) {
      getList(value)
        .then((data) => {
          setLoad(true);
          console.log(data);
          saveVideos(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoad(false);
          setSearchArea(false);
        });

      matches && textInput.current && (textInput.current.disabled = true);
    } else {
      matches && textInput.current && (textInput.current.disabled = false);
    }
    setSearchArea((prev) => !prev);
  };

  return (
    <div className="text-input">
      <div>
        <input
          ref={textInput}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={searchArea ? "search-area" : "search-area-disabled"}
        />
      </div>
      <button onClick={search}>
        <img src={Search} alt="search button" className="h100" />
      </button>
    </div>
  );
}
