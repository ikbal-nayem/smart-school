import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import ResultSheet from './resultSheet';
import { res1, res2, res3} from '../data';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Result = ({active_class}) =>{
	const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


	return(
		<div className="jr-card mb-2 p-0 jr-card-full">

			<div className="card-header py-2 text-center">
				<Typography variant="h6" gutterBottom>Result Report</Typography>
			</div>

			<div className="jr-card-body">
				<div className={classes.root}>
		      <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="1st Semester" {...a11yProps(0)} />
          <Tab label="2nd Semester" {...a11yProps(1)} />
          <Tab label="Final Semester" {...a11yProps(2)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
		      <TabPanel value={value} index={0} dir={theme.direction}>
            <ResultSheet rows={res1} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ResultSheet rows={res2} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ResultSheet rows={res3} />
          </TabPanel>
        </SwipeableViews>
		    </div>
	    </div>

		</div>
	)
}

export default Result;


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    '& .MuiTabs-indicator': {
      backgroundColor: '#006160',
    }
  },
}));
