import React from "react";
import data from "../data";
import { LinearProgress } from "@mui/material";
import CustomCard from "./CustomCard";
import clsx from "clsx";

export const Platform = (props) => {
    const formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, // Change to your desired currency code
    }).format;

    const colors = ["#6160DC", "#54C5EB", "#FFB74A", "#FF4A55"];

    return (
        <CustomCard {...props}>
            <div className="flex justify-between mb-2">
                <p className="font-semibold">Top Platform</p>
                <p className="text-primary">See All</p>
            </div>
            <ul className="flex flex-col gap-2">
                {data["platforms"].map((value, index) => (
                    <li key={index} className="flex flex-col gap-2">
                        <p className="text-left font-semibold">{value.name}</p>
                        <LinearProgress
                                variant="determinate"
                                value={(value.profit / 5000000) * 100}
                                sx={{
                                    height: "10px",
                                    borderRadius: "20px",
                                    backgroundColor: (theme) =>
                                        theme.palette.grey[200],
                                    "& .MuiLinearProgress-bar": {
                                        borderRadius: "inherit",
                                        backgroundColor: (theme) =>
                                            colors[index], // Using the theme for progress bar color
                                    },
                                }}
                            />
                            <div className="flex justify-between">
                                <p className="text-textSecondary">{formatCurrency(value.profit)}</p>
                                <p className="text-textSecondary">{value.netGain}</p>
                            </div>
                    </li>
                ))
                }
            </ul>
        </CustomCard>
    );
};

export default Platform;
