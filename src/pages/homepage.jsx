import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ADV_DATA_FIELD_TYPES,
    COUNTRY_DATA_FIELD_TYPES,
    FIELD_TYPES_PATH_MAP,
} from "../constants/common-constants";

const Homepage = () => {
    const navigate = useNavigate();

    const handleSectionClick = (fieldType) => {
        navigate(FIELD_TYPES_PATH_MAP[fieldType]);
        console.log({ fieldType }, FIELD_TYPES_PATH_MAP[fieldType]);
    };
    return (
        <div className="parent">
            <div className="heading">Ad Network Dashboard</div>
            {/* body */}
            <div className="description">
                An interactive analytics dashboard for a fictional ad network
                platform, utilizing provided datasets. The dashboard offer
                valuable insights into key metrics such as impressions, clicks,
                and click-through rates
            </div>
            <div className="categories">
                <div
                    onClick={() =>
                        handleSectionClick(ADV_DATA_FIELD_TYPES.IMPRESSIONS)
                    }
                    className="cat-item item1"
                >
                    Daily Ad Impressions
                </div>
                <div
                    onClick={() =>
                        handleSectionClick(ADV_DATA_FIELD_TYPES.CLICKS)
                    }
                    className="cat-item item2"
                >
                    Daily Ad Clicks
                </div>
                <div
                    onClick={() => handleSectionClick(ADV_DATA_FIELD_TYPES.CTR)}
                    className="cat-item item3"
                >
                    Daily CTR %
                </div>
                <div
                    onClick={() =>
                        handleSectionClick(COUNTRY_DATA_FIELD_TYPES.COUNTRY)
                    }
                    className="cat-item item4"
                >
                    Total impressions by Country Breakdown
                </div>
            </div>
        </div>
    );
};

export default Homepage;
