const MIN_BOOKING_START_TIME_HOURS = 4;
const QUERY_RANGE_PERIOD_DAYS = 30;

module.exports = {
    // we will only search availability for the next 30 days
    // searchAvailability has a max query range of 32 days
    QUERY_RANGE_PERIOD_DAYS: QUERY_RANGE_PERIOD_DAYS,
  
    // only show booking availability 4 hours from current time
    /* eslint-disable sort-keys */
    MIN_BOOKING_START_TIME_HOURS: MIN_BOOKING_START_TIME_HOURS,
  
    /**
     * Generate end date for search
     * @param startDate {Date}
     * @returns date
     */
    getEndAtDate: function (startDate) {
      const endDate = new Date(startDate);
      // only allow booking end time 30 days from start
      endDate.setDate(endDate.getDate() + QUERY_RANGE_PERIOD_DAYS);
      return endDate;
    },
  
    /**
     * Generate start date for search
     * @returns date
     */
    getStartAtDate: function () {
      const date = new Date();
      // only allow booking start time 4 hours from now
      date.setHours(date.getHours() + MIN_BOOKING_START_TIME_HOURS);
      return date;
    },
  };
