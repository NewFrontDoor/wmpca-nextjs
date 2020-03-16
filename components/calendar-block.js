import PropTypes from 'prop-types';
import React from 'react';
import {Grid} from 'theme-ui';
import {Calendar as CalendarComponent} from '@newfrontdoor/calendar';

const Calendar = ({data}) => {
  return (
    <Grid gap={20}>
      <CalendarComponent initialView="month" />
    </Grid>
  );
};

Calendar.propTypes = {
  data: PropTypes.array
};

export default Calendar;
