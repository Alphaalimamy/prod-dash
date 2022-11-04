import React, { useState } from 'react'
import { motion, LayoutGroup } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import * as FaIcons from "react-icons/fa"
import Chart from "react-apexcharts";
import "./Card.css"




const Card = (props) => {

    const [expanded, setExpanded] = useState(false)
    return (
        <LayoutGroup>
            {
                expanded ? (<ExpandedCard items={props} setExpanded={() => setExpanded(false)} />) :
                    (<CompactCard items={props} setExpanded={() => setExpanded(true)} />)
            }
        </LayoutGroup>
    )
}


function CompactCard({ items, setExpanded }) {
    const Png = items.png

    return (<motion.div className="CompactCard"
        style={{
            background: items.color.backGround,
            boxShadow: items.color.boxShadow
        }}
        layoutId="compactId"
        onClick={setExpanded}
    >
        <div className="radial">
            <CircularProgressbar
                value={items.barValue}
                text={items.barValue} />
            <span>{items.title}</span>
        </div>
        <div className="detail">
            <Png />
            <span>Le: {items.value}</span>
            <span>Last 24 hours</span>
        </div>
    </motion.div>)
}


function ExpandedCard({ items, setExpanded }) {

    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-11-19T00:00:00.000Z",
                    "2022-11-19T01:30:00.000Z",
                    "2022-11-19T02:30:00.000Z",
                    "2022-11-19T03:30:00.000Z",
                    "2022-11-19T04:30:00.000Z",
                    "2022-11-19T05:30:00.000Z",
                    "2022-11-19T06:30:00.000Z",
                ],
            },
        },
    };

    return <motion.div
        className='ExpandedCard'
        layoutId='expandedId'
        style={{
            background: items.color.backGround,
            boxShadow: items.color.boxShadow
        }}>

        <div style={{alignSelf:'flex-end', cursor:'pointer', color:'white'}}>
            <FaIcons.FaTimes onClick={setExpanded} />
        </div>

        <span>{items.title}</span>

        <div className="chartContainer">
            <Chart options={data.options} series={items.series} type="area" />
        </div>
        <span>Last 24 Hours</span>
    </motion.div>
}
export default Card
