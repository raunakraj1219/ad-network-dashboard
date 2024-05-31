import React from "react";

const Dropdown = ({ options, handleChange, selectedValue, heading }) => {
    return (
        <div>
            <div>{heading}</div>
            <br />
            <select
                id="colors"
                value={selectedValue}
                onChange={handleChange}
                style={{ width: "200px", padding: "8px", fontSize: "14px" }}
            >
                {options.map((opt) => {
                    return <option value={opt}>{opt}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;
