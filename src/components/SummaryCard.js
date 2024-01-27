import React from 'react'
import {Grid} from "@mui/material";
import {ReactComponent as RiseSvg} from "../assests/svg/Rise.svg";
import {ReactComponent as FallSvg} from "../assests/svg/Fall.svg";
import {ReactComponent as RiseSmallSvg} from "../assests/svg/RiseSmall.svg";
import {ReactComponent as FallSmallSvg} from "../assests/svg/FallSmall.svg";
import {ReactComponent as OrderSvg} from "../assests/svg/Order.svg";
import {ReactComponent as RefundSvg} from "../assests/svg/Refund.svg";
import {ReactComponent as SalesSvg} from "../assests/svg/Sales.svg";
import {ReactComponent as IncomeSvg} from "../assests/svg/Income.svg";
import CustomCard from './CustomCard';
import clsx from 'clsx';

export const SingleSummaryCard = ({name, icon, units, netGain}) => {
  return (
    <CustomCard className="flex flex-col justify-around gap-2">
        <div className="flex justify-between">
            <div className='border-2 rounded-full p-2'>
                {icon}
            </div>
            {netGain > 0 ? <RiseSvg/> : <FallSvg/>}
        </div>
        <div className='flex flex-col items-start'>
            <p className="text-textSecondary">{name}</p>
            <p className="font-semibold text-xl">{units}</p>
        </div>
        <div className='flex justify-between'>
            <div className={`flex items-center gap-2 px-2 bg-opacity-20 rounded-full ${(netGain > 0) ? "bg-primary text-primary" : "bg-error text-error"}`}>
                <div>{netGain > 0 ? <RiseSmallSvg /> : <FallSmallSvg />}</div>
                <p>{`${netGain}%`}</p>
            </div>
            <p>vs. previous month</p>
        </div>
    </CustomCard>
  )
}
const InputCard = (
    <SingleSummaryCard
        name="Total Order"
        icon={<OrderSvg />}
        units="350"
        netGain={23.5}
    />
);
const RefundCard = (
    <SingleSummaryCard
        name="Total Refund"
        icon={<RefundSvg />}
        units="270"
        netGain={-23.5}
    />
);
const SalesCard = (
    <SingleSummaryCard
        name="Average Sales"
        units="156"
        icon={<SalesSvg />}
        netGain={-23.5}
    />
);
const IncomeCard = (
    <SingleSummaryCard
        name="Total Income"
        icon={<IncomeSvg />}
        units="350"
        netGain={23.5}
    />
);

const SummaryCard = (props) => {
    return (
        <div className={clsx('grid grid-cols-1 lg:grid-cols-2 gap-4', props.className)}>
            {InputCard}
            {RefundCard}
            {SalesCard}
            {IncomeCard}
        </div>
    )
}

export default SummaryCard;
