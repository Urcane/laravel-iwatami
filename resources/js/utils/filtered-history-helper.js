const FilteredHistoryHelper = {
    init({ startDate, endDate, dateData }){
        if (startDate != "Invalid Date" && endDate != "Invalid Date") {
            return this._filterTheDate(startDate, endDate, dateData)
        }
        return Object.keys(dateData)
    },

    _filterTheDate(startDate, endDate, dateData) {
        return Object.keys(dateData).filter((date) => {
            const aDate = new Date(date)
            return aDate >= startDate && aDate <= endDate;
        });
    }
};

export default FilteredHistoryHelper;