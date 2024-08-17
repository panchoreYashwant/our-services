import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Unlock Tailored Services: Your Needs, Instantly Found"
        fullWidth
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
        InputProps={{
          sx: {
            paddingLeft: "20px",
            paddingRight: "10px",
            borderRadius: "50px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  backgroundColor: "#7b1fa2",
                  color: "white",
                  borderRadius: "50%",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "#6a1b9a",
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
