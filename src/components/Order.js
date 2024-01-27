import React from "react";
import data from "../data";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@mui/material";
import User1 from "../assests/png/User1.png"
import User2 from "../assests/png/User2.png"
import User3 from "../assests/png/User3.png"
import User4 from "../assests/png/User4.png"
import User5 from "../assests/png/User5.png"
import {ReactComponent as ViewIconSvg} from '../assests/svg/ViewIcon.svg'
import CustomCard from "./CustomCard";
import {Avatar} from "@mui/material";

export const Order = (props) => {
    const formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0, // Change to your desired currency code
    }).format;

    const users = [User1, User2, User3, User4, User5]

    return (
        <CustomCard {...props}>
            <div className="flex justify-between">
                <p className="font-semibold">Last Orders</p>
                <p className="text-primary">See All</p>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><p className="text-textSecondary">Name</p></TableCell>
                            <TableCell><p className="text-textSecondary">Date</p></TableCell>
                            <TableCell><p className="text-textSecondary">Amount</p></TableCell>
                            <TableCell><p className="text-textSecondary">Status</p></TableCell>
                            <TableCell><p className="text-textSecondary">Invoice</p></TableCell>
                        </TableRow>
                    </TableHead>
                    {data["orders"].map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <img src={users[index]} className="rounded-full"/>
                                    <p>{user.name}</p>
                                
                                </div>
                                </TableCell>
                            <TableCell><p className="text-textSecondary">{user.date}</p></TableCell>
                            <TableCell><p className="font-semibold">{formatCurrency(user.amount)}</p></TableCell>
                            <TableCell><p className={(user.status == "Refund") ? "text-error" : "text-primary"}>{user.status}</p></TableCell>
                            <TableCell><div className="flex gap-1 items-center">
                                <ViewIconSvg/>
                            <p>View</p>
                                </div></TableCell>
                        </TableRow>
                    ))}
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </CustomCard>
    );
};
export default Order;
