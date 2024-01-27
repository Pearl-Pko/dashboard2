import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer,
} from "recharts";
import {useState} from "react";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
}

const RoundedTopBar = (props) => {
    const {x, y, width, height} = props;
    // const radius = Math.min(height/2, props.radius);
    console.log(props);
    // console.log(props.dynamicFill(props.index))
    const clipPathId = `clipPath-${props.index}`;
    console.log(props.index == 1 ? props : "");
    const radiusPercentage = 10;
    const radius = Math.min(height * (radiusPercentage / 100), width / 2);
    // const radius = Math.min(containerWidth * (radiusPercentage / 100), width / 2);

    return (
        <g>
            {/* Define the clipPath */}
            <defs>
                <clipPath id={clipPathId}>
                    <rect x={x} y={y} width={width} height={height} />
                </clipPath>
            </defs>

            {/* Apply the clipPath to the shape */}
            <path
                d={`M${x},${y + radius} 
              A${radius},${radius} 0 0 1 ${x + radius},${y} 
              H${x + width - radius} 
              A${radius},${radius} 0 0 1 ${x + width},${y + radius} 
              V${y + height} 
              H${x} 
              Z`}
                fill={props.fill}
                stroke={props.stroke}
                clipPath={`url(#${clipPathId})`}
            />
        </g>
    );
};

const SalesTrendChart = () => {
    const [focusBar, setFocusBar] = useState(null);
    const [mouseLeave, setMouseLeave] = useState(true);
    const [selectedBar, setSelectedBar] = useState(null);

    const handleBarClick = (entry) => {
        setSelectedBar(entry.dataKey);
    };

    // Sample data for the bar chart
    const data = [
        {name: "Jan", value: 11000},
        {name: "Feb", value: 19000},
        {name: "Mar", value: 9500},
        {name: "Apr", value: 28000},
        {name: "May", value: 45000},
        {name: "Jun", value: 18500},
        {name: "Jul", value: 23000},
        {name: "Aug", value: 35000},
        {name: "Sep", value: 40000},
        {name: "Oct", value: 31000},
        {name: "Nov", value: 27500},
        {name: "Dec", value: 32600},
    ];

    return (
        <div style={{minWidth: 600, overflowX: "auto"}}>
            <ResponsiveContainer width="100%" minWidth={600} height={300} style={{overflowX: "auto"}}>
                <BarChart
                    data={data}
                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    onMouseMove={(state) => {
                        if (state.isTooltipActive) {
                            setFocusBar(state.activeTooltipIndex);
                            setMouseLeave(false);
                        } else {
                            setFocusBar(null);
                            setMouseLeave(true);
                        }
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                    />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 50000]} tickCount={6} />
                    <Tooltip cursor={false} filter="url(#tooltipFilter)" />
                    {/* <Legend /> */}
                    <Bar
                        // key={entry.name}
                        dataKey="value"
                        fill="#c0c0c0"
                        // shape={
                        //     <RoundedTopBar
                        //         // dynamicFill= {(index) => (focusBar === index) ? "url(#colorGradient)" : "#8884d8"}
                        //         radius={25}
                        //         fill="url(#colorGradient)"
                        //         // fill={(index) =>
                        //         //     focusBar === index ? "#a0a0a0" : "#c0c0c0"
                        //         // }
                        //     />
                        // }
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={focusBar === index ? "url(#colorGradient)" : "rgba(52, 202, 165, 0.1)"}
                            />
                        ))}
                    </Bar>
                    <defs>
                        <linearGradient
                            id="colorGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#34CAA5"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#34CAA5"
                                stopOpacity={0.2}
                            />
                        </linearGradient>
                    </defs>
                    {/* this is svg specifing the gradient */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesTrendChart;
