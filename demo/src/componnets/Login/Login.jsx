import React from 'react'
import styles from "../Login/Login.module.scss"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputLabel } from '@mui/material';
export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div>
        <section className={styles.login}>
            <div className='container'>
                <form>
                    <div className={styles.heading}>
                        <h1>Login</h1>
                    </div>
                    <div className={styles.formControl}>
                        <TextField id="outlined-basic"sx={{ width: '100%',  }} label="Username" variant="outlined" />
                    </div>
                    <div className={styles.formControl}>
                        <FormControl sx={{  width: '100%', }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className={styles.formControl}>
                        <p >forget your Password ?</p>
                    </div>
                    <button className={styles.btn}>Login</button>
                </form>
            </div>
        </section>
    </div>
  )
}
