import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@mui/material";

const steps = ["Personal Details", "Educational Details", "UnderTaking","Bandhpatra","Review and Submit"];

const defaultValues = {
  selectedBranch: "",
  studName: "",
  studDob: "",
  studGender: "",
  studAdhar:"",
  studContact:"",
  parentContact:"",
  studEmail:"",
  studNationality:"",
  studBloodGroup:"",
  studFatherName:"",
  studFatherOccupation:"",
  studMotherName:"",
  selectedCategory:"",
  selectedMinority:"",
  selectedDisability:"",
  selectedDefence:"",
  studCAddress:"",
  studCCity:"",
  selectedCUrban:"",
  studCPincode:"",
  studCTaluka:"",
  studCDistrict:"",
  studCState:"",
  studPAddress:"",
  studPCity:"",
  selectedPUrban:"",
  studPPincode:"",
  studPTaluka:"",
  studPDistrict:"",
  studPState:"",

};

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const validationSchema = [
    //validation for step1
    yup.object({
      selectedBranch: yup.string().required("Required"),
      studName: yup.string().required("Required"),
      studDob: yup.string().required("Required")
    }),
    //validation for step2
    yup.object({
      address: yup.string().required("Required"),
      city: yup.string().required("Required")
    }),
    yup.object()
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { handleSubmit, trigger } = methods;
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    handleNext();
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return null;
    }
  };

  return (
    <main>
      <Paper elevation={1} sx={{ width: "90%", mx: "auto", mt: 4, p: 3 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FormProvider {...methods}>
                <form>
                  <Box my={2} sx={{ minHeight: "25vh" }}>
                    {getStepContent()}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    style={{ paddingTop: "5vh" }}
                  >
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </form>
              </FormProvider>
            </React.Fragment>
          )}
        </div>
      </Paper>
    </main>
  );
}
