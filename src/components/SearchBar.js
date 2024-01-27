import {useState} from "react";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {ReactComponent as SearchIcon} from "../assests/svg/Seacrh.svg";
import {SvgIcon} from "@mui/material";
import {InputAdornment} from "@mui/material";

const SearchBar = () => (
    <div>
        <TextField
            // label="Search"
            placeholder="Search..."
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
                sx: {
                    borderRadius: "20px",
                }
            }}
        />
    </div>
);

export default SearchBar;
