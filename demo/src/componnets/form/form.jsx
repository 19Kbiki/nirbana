import { Alert, Autocomplete, Button, CircularProgress, Paper, Stack, TextField } from "@mui/material";
import { courseItem } from "../../config/config";
import styles from "../Qurry/Qurry.module.scss";
import { useState } from "react";
import axios from 'axios';
import Slide from '@mui/material/Slide';

export const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        course: '',
        firstName: '',
        lastName: '',
        nationality:'',
        phoneNo: '',
        email: '',
        address: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://enquiry-receiver-backend-g6lg7lulsq-uc.a.run.app/v1/enquiries', formData);
            console.log(response.data);
            setSuccessMessage('Enquiry submitted successfully.');
            setErrorMessage('');
            setFormData({
                course: '',
                firstName: '',
                lastName: '',
                nationality:'',
                phoneNo: '',
                email: '',
                address: ''
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
            setErrorMessage('Failed to submit enquiry. Please try again later.');
            setSuccessMessage('');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCloseAlerts = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    // Automatically close alerts after 5 seconds
    setTimeout(handleCloseAlerts, 10000);

    return (
        <>
            <Stack
                sx={{
                    width: '50%',
                    position: 'absolute',
                    left: '50%', 
                    bottom: '0', 
                    zIndex: 1000,
                    transform: 'translate(-50%, -50%)',
                }}
                spacing={2}
                alignItems="center"
            >
                {successMessage && (
                    <Slide direction="down" in={successMessage} mountOnEnter unmountOnExit>
                        <Alert severity="success" onClose={handleCloseAlerts} sx={{ bgcolor: '#4CAF50', color: '#FFF', width: '50%' }}>
                            {successMessage}
                        </Alert>
                    </Slide>
                )}
                {errorMessage && (
                    <Slide direction="down" in={errorMessage} mountOnEnter unmountOnExit>
                        <Alert severity="error" onClose={handleCloseAlerts} sx={{ bgcolor: '#F44336', color: '#FFF', width: '50%' }}>
                            {errorMessage}
                        </Alert>
                    </Slide>
                )}
            </Stack>
            <form onSubmit={handleSubmit}>
                <div className={styles.heading}>
                    <h1>Enquiry</h1>
                </div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={courseItem.map((ele) => ele.name)}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} name="course" label="Select Course" />}
                    PaperComponent={({ children }) => (
                        <Paper style={{ backgroundColor: '#000' }}>{children}</Paper>
                    )}
                    onChange={(event, value) => setFormData({ ...formData, course: value })}
                />
           
                <div className={styles.box}>
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="firstName" label="First name" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.firstName} />
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="lastName" label="Last name" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.lastName} />
                </div>
                <div className={styles.box}>
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="phoneNo" label="Phone" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.phone} />
                    <TextField sx={{ width: "100%", margin: "10px 0" }} name="email" label="Email" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.email} />
                </div>
                <TextField sx={{ width:"100%", margin:"10px 0"}} name="nationality" label="Nationality" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.nationality} />
                <TextField sx={{ width: "100%", margin: "10px 0" }} name="address" label="Address" variant="outlined" autoComplete="off" onChange={handleInputChange} value={formData.address} />
                <Button className={styles.btn} type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
            </form>
        </>
    )
}