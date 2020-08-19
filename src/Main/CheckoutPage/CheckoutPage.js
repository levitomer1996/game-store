import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Steps
import ReviewStep from "./Steps/ReviewStep";
import ShipingDetails from "./Steps/ShipingDetailsStep";
import PaymentStep from "./Steps/PaymentStep";

import CheckoutContext from "./Steps/CheckOutPage.Context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Review", "Shipping info", "Payment method"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ReviewStep />;
    case 1:
      return <ShipingDetails />;
    case 2:
      return <PaymentStep />;
    default:
      return "Unknown stepIndex";
  }
}

export default function CheckOutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const { step, handleNext } = useContext(CheckoutContext);

  useEffect(() => {});
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {step === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(step)}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
