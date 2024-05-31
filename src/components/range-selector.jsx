import React from "react";

const RangeSelector = ({ handleDateChange, minDateValue, maxDateValue }) => {
    return (
        <div>
            <div>Select date range</div>
            <br />
            <input
                type="date"
                onChange={(e) => handleDateChange(e, "startDate")}
                min={minDateValue}
                max={maxDateValue}
                defaultValue={minDateValue}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
                type="date"
                onChange={(e) => handleDateChange(e, "endDate")}
                min={minDateValue}
                max={maxDateValue}
                defaultValue={maxDateValue}
            />
        </div>
    );
};

export default RangeSelector;
