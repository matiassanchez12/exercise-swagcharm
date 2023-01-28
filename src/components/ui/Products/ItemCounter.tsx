import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";

interface Props {
  currentValue: number;
  maxValue: number;
  handleUpdateCount: (value: number) => void;
}

export const ItemCounter: FC<Props> = ({ currentValue, maxValue, handleUpdateCount }) => {
  const handleAdd = () => {
    currentValue < maxValue && handleUpdateCount(1);
  };

  const handleMinus = () => {
    currentValue > 1 && handleUpdateCount(-1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleMinus}>
        <svg
          fill="currentColor"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
          ></path>
        </svg>
      </IconButton>

      <Typography sx={{ width: 40, textAlign: "center" }} component="p">
        {currentValue}
      </Typography>

      <IconButton onClick={handleAdd}>
        <svg
          fill="currentColor"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          ></path>
        </svg>
      </IconButton>
    </Box>
  );
};
