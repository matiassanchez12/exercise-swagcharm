import { Box, Typography } from "@mui/material";
import { useRef } from "react";

interface Props {
  value: string;
  handleOnChange: (value: string) => void;
  options: Option[];
  icons?: boolean;
}

type Option = {
  value: string;
  text: string;
  icon?: string;
};

export const Select = ({ value, handleOnChange, options, icons = false }: Props) => {
  const refSelect = useRef(null);
  const currentOption = options.find((option) => option.value === value);

  return (
    <Box className="flex_center">
      {icons && <img src={currentOption!.icon} alt={currentOption!.value} className="img_flag" />}

      <select
        ref={refSelect}
        className="select_custom"
        value={value}
        onChange={({ target }) => handleOnChange(target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="option_custom">
            {option.text}
          </option>
        ))}
      </select>
    </Box>
  );
};
