import { ChangeEvent, useContext, useState } from "react";
import { searchIcon } from "../../../assets";
import { categories } from "../../../constants";
import { CartContext } from "../../../context";

export const Searcher = () => {
  const [value, setValue] = useState("");
  const { updateTabIndex, updateSearch } = useContext(CartContext);

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleKeyDown = () => {
    updateTabIndex(categories.length + 2);
    updateSearch(value.toLocaleLowerCase());
  };

  return (
    <div className="input_search">
      <label htmlFor="search" className="input_search-label">
        <img src={searchIcon} alt="search-icon" width={20} height={20} />
      </label>

      <input
        id="search"
        type="text"
        className="input_search-input"
        placeholder="Search Products"
        value={value}
        onChange={handleOnChange}
        onKeyDown={({ key }) => key === "Enter" && handleKeyDown()}
      />
    </div>
  );
};
