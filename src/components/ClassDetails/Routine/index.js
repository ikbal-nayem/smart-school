import React from "react";
import { useTheme } from '@material-ui/core/styles';
import { MobileStepper, Typography, Button } from "@material-ui/core";
import Widget from "components/Widget";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import TableItem from "./TableItem";



const tutorialSteps = [
  {
    label: 'Saturday',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Sunday',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Monday',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Tuesday',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Wednesday',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Thursday',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Friday',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const week_list = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const Routine = () => {
  const d = new Date()
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState((d.getDay()+1)%7);
  const maxSteps = week_list.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1)%7);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1)%7);
  };

  return (
    <Widget styleName="jr-card-full jr-card-tabs-right jr-card-profile animated slideInUp animation-delay-4 amimation-duration-3">
      <div className="card-header">
        <h4 className="card-title mb-0">Routine</h4>
      </div>
      <div className="jr-tabs-classic">
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        <div className="jr-tabs-content jr-task-list text-center">
          <Typography
            variant="h4"
            className="mb-3 text-primary animated flipCenter animation-duration-3 animation-delay-3"
          >{tutorialSteps[activeStep].label}</Typography>
          <TableItem />
        </div>
      </div>

    </Widget>
  )
}


export default Routine;
