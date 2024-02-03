import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import styles from "../Admission/Admission.module.scss"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Admission() {
    const [value, setValue] = React.useState(null);
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]
  return (
    <div>
        <section className={styles.admission_bnnr}>
           <img src='assets/bannr/banner.jpg' />
        </section>
      <section className={styles.admission}>
        <div className='container'>

            <form>
            <div className={styles.heading}>
                <h1> Admission From</h1>
            </div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Select Course" />}
                />
                <div className={styles.box}>
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="First name" variant="outlined" />
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Last name" variant="outlined" />
                </div>
                <div className={styles.box}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                    <DatePicker value={value} label="Date of Birth" onChange={(newValue) => setValue(newValue)} />
                    </DemoContainer>
                </LocalizationProvider>
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="School/College" variant="outlined" />
                </div>
                <div className={styles.box}>
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Students Occupation (if employed)" variant="outlined" />
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Phone" variant="outlined" />
                </div>
                <div className={styles.box}>
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Father’s  Name" variant="outlined" />
                    <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Mother’s Name" variant="outlined" />
                </div>
                <TextField sx={{ width:"100%", margin:"10px 0"}} id="outlined-basic" label="Address" variant="outlined" />
                
                <button className={styles.btn}>Apply</button>
            </form>
        </div>
      </section>
    </div>
  )
}
