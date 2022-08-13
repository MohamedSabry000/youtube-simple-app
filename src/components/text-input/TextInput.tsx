import React, { useContext, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { YoutubeContextType } from "../../@types/youtube";
import { getList } from "../../api";
import Search from "../../assets/search.png";
import { YoutubeContext } from "../../context/YoutubeContext";

import "./TextInput.css";

export default function TextInput({search}: {search: (query: string) => void}) {
  const { saveVideos, setLoading } = useContext(
    YoutubeContext
  ) as YoutubeContextType;
  const [text, setText] = React.useState('')
  const [searchArea, setSearchArea] = React.useState(true);
  const textInput = useRef<HTMLInputElement>(null);
  const matches = useMediaQuery("(max-width: 768px)");

  const searching = () => {
    if (searchArea || !matches) {
      search(text)
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
          value={text}
          onChange={(event) => setText(event.target.value)}
          className={searchArea ? "search-area" : "search-area-disabled"}
        />
        <button onClick={searching}>
          <img src={Search} alt="search button" className="h80" />
        </button>
      </div>
    </div>
  );
}
