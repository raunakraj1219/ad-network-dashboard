import React, { useEffect, useState } from "react";
import PieChart from "../components/pie-chart";
import { CountriesData } from "../data/countries-data";
import Dropdown from "../components/dropdown";
import { getSelectedOptionFilteredData } from "../utils/common-utils";

const CountryImpressionsGraph = () => {
    const [data, setData] = useState(CountriesData);
    const [selectedAdvertiser, setSelectedAdvertiser] = useState("All");

    const categoryName = data?.map((dat) => dat?.Country);
    const categoryData = data?.map((dat) => dat?.Impressions);
    const totalAdvertisers = [
        "All",
        ...Array.from(new Set(CountriesData?.map((dat) => dat?.Advertiser))),
    ];

    const getAndSetGraphData = () => {
        const optFilteredData = getSelectedOptionFilteredData(
            CountriesData,
            "Advertiser",
            selectedAdvertiser
        );
        setData(optFilteredData);
    };

    useEffect(() => {
        getAndSetGraphData();
    }, [selectedAdvertiser]);

    return (
        <>
            <div className="filter-section">
                <Dropdown
                    options={totalAdvertisers}
                    handleChange={(e) => setSelectedAdvertiser(e.target.value)}
                    selectedValue={selectedAdvertiser}
                    heading="Select Advertiser"
                />
            </div>
            <PieChart
                categoryData={categoryData}
                categoryName={categoryName}
                title="Total Impressions by Country Breakdown"
            />
        </>
    );
};

export default CountryImpressionsGraph;
