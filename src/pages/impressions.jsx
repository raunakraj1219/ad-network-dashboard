import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AdvertiserData } from "../data/advertiser-data";
import LineGraph from "../components/line-graph";
import {
    formatDateToYYYYMMDD,
    getDateFilteredData,
    getLargestDate,
    getSelectedOptionFilteredData,
    getSmallestDate,
} from "../utils/common-utils";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import RangeSelector from "../components/range-selector";
import Dropdown from "../components/dropdown";
// import DateRangeSelector from "../components/date-range-selector";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ImpressionsGraph = () => {
    const minDateValue = formatDateToYYYYMMDD(
        getSmallestDate(AdvertiserData?.map((dat) => dat?.Date))
    );
    const maxDateValue = formatDateToYYYYMMDD(
        getLargestDate(AdvertiserData?.map((dat) => dat?.Date))
    );
    const [data, setData] = useState(AdvertiserData);
    const [calendarDate, setCalendarDate] = useState({
        startDate: minDateValue,
        endDate: maxDateValue,
    });
    const [selectedAdvertiser, setSelectedAdvertiser] = useState("All");
    const xData = data?.map((dat) => dat?.Date);
    const yData = data?.map((dat) => dat?.Impressions);
    const totalAdvertisers = [
        "All",
        ...Array.from(new Set(AdvertiserData?.map((dat) => dat?.Advertiser))),
    ];
    const getAndSetGraphData = () => {
        const filteredData = getDateFilteredData(
            AdvertiserData,
            calendarDate.startDate,
            calendarDate.endDate
        );
        const optFilteredData = getSelectedOptionFilteredData(
            filteredData,
            "Advertiser",
            selectedAdvertiser
        );
        setData(optFilteredData);
    };

    const handleDateChange = (e, type) => {
        setCalendarDate((s) => ({
            ...s,
            [type]: e.target.value,
        }));
    };
    useEffect(() => {
        getAndSetGraphData();
    }, [calendarDate, selectedAdvertiser]);
    return (
        <div className="bg-[#fff]">
            <div className="filter-section">
                <RangeSelector
                    handleDateChange={handleDateChange}
                    minDateValue={minDateValue}
                    maxDateValue={maxDateValue}
                />
                <Dropdown
                    options={totalAdvertisers}
                    handleChange={(e) => setSelectedAdvertiser(e.target.value)}
                    selectedValue={selectedAdvertiser}
                    heading="Select Advertiser"
                />
            </div>

            {/* <Dropdown handleDropdownChange={handleDropdownChange} /> */}
            <LineGraph
                xData={xData}
                yData={yData}
                title="Impressions vs Date"
                label="Impressions"
            />
        </div>
    );
};

export default ImpressionsGraph;
