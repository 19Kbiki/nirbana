import React, { useState } from "react";
import { Alert, Autocomplete, Button, CircularProgress, Paper, Stack, TextField } from "@mui/material";
import { courseItem, courseItemSelect } from "../../config/config";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../Qurry/Qurry.module.scss";
import axios from 'axios';
import Slide from '@mui/material/Slide';
import { useNavigate } from "react-router-dom";
import { useName } from '../../nameContaxt'; // Import the useName hook

export const EnquiryForm = () => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false); 
    const { setName } = useName(); // Access the setName function from the context
    const [recaptchaToken, setRecaptchaToken] = useState(null); 
    const [formData, setFormData] = useState({
        course: '',
        firstName: '',
        lastName: '',
        nationality:'',
        phoneNo: '',
        email: '',
        address: ''
    });
    const [formErrors, setFormErrors] = useState({
        course: '',
        firstName: '',
        lastName: '',
        nationality:'',
        phoneNo: '',
        email: '',
        address: ''
    });
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setSubmitting(true);
                const response = await axios.post('https://enquiry-receiver-backend-g6lg7lulsq-uc.a.run.app/v1/enquiries', formData);
                console.log(response);
                setSuccessMessage('Enquiry submitted successfully.');
                setErrorMessage('');
                resetForm();
                setName(formData.firstName); // Set the name using the context
                navigate("/thank-you");
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    setErrorMessage(error.response.data);
                    console.log("biki")
                    console.log(error)
                    console.log(errorMessage)
                    console.log(error.response.data)
                } else {
                    console.error('Error submitting form data:', error);
                    setErrorMessage('Failed to submit enquiry. Please try again later.');
                }
                setSuccessMessage('');
            } finally {
                setLoading(false);
                setSubmitting(false);
            }
        }
    };


    const validateForm = () => {
        let valid = true;
        const errors = {};

        // Validation logic for each field
        if (!formData.course.trim()) {
            errors.course = 'Course is required';
            valid = false;
        }
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
            valid = false;
        }
        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
            valid = false;
        }
        if (!formData.phoneNo.trim()) {
            errors.phoneNo = 'Phone number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNo)) {
            errors.phoneNo = 'Phone number must be 10 digits';
            valid = false;
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }
        if (!formData.nationality.trim()) {
            errors.nationality = 'Nationality is required';
            valid = false;
        }
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setFormErrors(prevErrors => ({
            ...prevErrors,
            [name]: value ? '' : prevErrors[name]
        }));
    };

    const handleBlur = (field) => {
        const { [field]: touchedError, ...rest } = formErrors;
        if (touchedError) {
            setFormErrors(rest);
        }
    };

    const handleCloseAlerts = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    const resetForm = () => {
        setFormData({
            course: '',
            firstName: '',
            lastName: '',
            nationality:'',
            phoneNo: '',
            email: '',
            address: ''
        });
        setFormErrors({
            course: '',
            firstName: '',
            lastName: '',
            nationality:'',
            phoneNo: '',
            email: '',
            address: ''
        });
    };

    return (
        <div className={styles.enquiryFormContainer}>
            <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                <h1 className={styles.heading}>Enquiry</h1>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={courseItemSelect.map((ele) => ele.name)}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} name="course" label="Select Course" />}
                    PaperComponent={({ children }) => (
                        <Paper style={{ backgroundColor: '#000' }}>{children}</Paper>
                    )}
                    onChange={(event, value) => setFormData({ ...formData, course: value })}
                    onBlur={() => handleBlur("course")}
                    error={!!formErrors.course} helperText={formErrors.course} 
                />
             
                <div className={styles.box}>
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="firstName" label="First name" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("firstName")} value={formData.firstName} error={!!formErrors.firstName} helperText={formErrors.firstName} />
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="lastName" label="Last name" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("lastName")} value={formData.lastName} error={!!formErrors.lastName} helperText={formErrors.lastName} />
                </div>
                <div className={styles.box}>
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="phoneNo" label="Phone" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("phoneNo")} value={formData.phoneNo} error={!!formErrors.phoneNo } helperText={formErrors.phoneNo} />
                 
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="email" label="Email" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("email")} value={formData.email} error={!!formErrors.email} helperText={formErrors.email} />
                 

                </div>
                <TextField sx={{ width:"100%", margin:"10px 0"}} name="nationality" label="Nationality" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("nationality")} value={formData.nationality} error={!!formErrors.nationality} helperText={formErrors.nationality} />
                <TextField sx={{ width: "100%", margin: "10px 0" }} name="address" label="Address" variant="outlined" autoComplete="off" onChange={handleInputChange} onBlur={() => handleBlur("address")} value={formData.address} error={!!formErrors.address} helperText={formErrors.address} />
                <ReCAPTCHA
                    sitekey="6LdFTIopAAAAAIFMU2ujEd_ZBETrFWCN5bL2ixos" 
                    onChange={(token) => setRecaptchaToken(token)} 
                />
              <Button className={styles.btn} type="submit" disabled={loading || submitting || !recaptchaToken}>
                {loading || submitting ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
            </form>
          <Stack
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 9999, // Ensure it appears above other content
                    padding: '20px' // Add padding for better visibility
                }}
                >
               
                {errorMessage && (
                    <Slide direction="down" in={errorMessage} mountOnEnter unmountOnExit>
                        <Alert severity="error" onClose={handleCloseAlerts} className={styles.alert} sx={{ color: 'red' , background:"red"}}>
                            <p style={{textTransform:"capitalize" , margin:"0"}}>{errorMessage}</p>
                        </Alert>
                    </Slide>
                )}
                </Stack> 
        </div>
    );
};

export default EnquiryForm;