
export const getDateFilteredData = (data, startDate, endDate,) => {
    let filteredData = data;
    const sDate = new Date(startDate);
    const eDate = new Date(endDate)
    if (startDate && endDate) {
        filteredData = data.filter(dat => {
            const date = new Date(dat.Date);
            if (date >= sDate && date <= eDate)
                return dat
        })
    }
    return filteredData;
}

export const getSelectedOptionFilteredData = (data, fieldName, selectedValue) => {
    if (selectedValue === "All") return data;
    const arr = data.filter(dat => dat[fieldName] === selectedValue)
    return arr;
}


export const getSmallestDate = (dateArray) => {
    const dateValues = dateArray.map(date => new Date(date).getTime());
    const smallestDateValue = dateValues.reduce((min, val) => val < min ? val : min, Infinity);
    const smallestDate = new Date(smallestDateValue);
    return smallestDate;
}
export const getLargestDate = (dateArray) => {
    const dateValues = dateArray.map(date => new Date(date).getTime());
    const largestDateValue = dateValues.reduce((max, val) => val > max ? val : max, 0);
    const largestDate = new Date(largestDateValue);
    return largestDate;
}
export function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based month, hence +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
export const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
};