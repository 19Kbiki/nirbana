import { Autocomplete, TextField } from "@mui/material";
import { courseItem } from "../../config/config";
import styles from "../Qurry/Qurry.module.scss";

export const EnquiryForm = () => {
    return (
        <form>
        <div className={styles.heading}>
            <h1>Enquiry</h1>
        </div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={courseItem.map((ele) => ele.name)}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} label="Select Course" />}
            />
            <div className={styles.box}>
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="First name" variant="outlined" />
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Last name" variant="outlined" />
            </div>
            <div className={styles.box}>
            
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Phone" variant="outlined" />
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Email" variant="outlined" />
            </div>
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Nationality" variant="outlined" />
            <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Address" variant="outlined" />
            
            <button className={styles.btn}>Submit</button>
        </form>
    )
}