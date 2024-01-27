import React from "react";
import SalesTrendChart from "./SalesTrendChart";
import CustomCard from "./CustomCard";
import {Menu, MenuItem} from "@mui/material";
import {ReactComponent as ArrowDownIcon} from "../assests/svg/Arrow down.svg";

export const SalesTrend = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <CustomCard {...props}>
            <div className="flex justify-between">
                <p className="font-semibold">Sales Trends</p>
                <div className="flex gap-4 items-center">
                    <p>Sort by:</p>
                    <div className="flex gap-3 items-center border px-2 py-1 rounded-full" onClick={handleClick}>
                        <p className="text-textSecondary">Weekly</p>
                        <ArrowDownIcon />
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Weekly</MenuItem>
                        <MenuItem onClick={handleClose}>Monthly</MenuItem>
                    </Menu>
                </div>
                {/* <div>
                
            </div> */}
            </div>
            <SalesTrendChart />
        </CustomCard>
    );
};

export default SalesTrend;
