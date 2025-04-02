import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Tabs,
    Tab,
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [patientData, setPatientData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "male",
        disability: "no",
    });

    const [doctorData, setDoctorData] = useState({
        name: "",
        specialization: "",
        license: "",
        email: "",
        password: "",
    });

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validateLogin()) {
            console.log("Login data:", loginData);
            // Here we'll add the API call for login
        }
    };

    const handlePatientSubmit = (e) => {
        e.preventDefault();
        if (validatePatient()) {
            const patients = JSON.parse(localStorage.getItem("patients")) || [];
            patients.push(patientData);
            localStorage.setItem("patients", JSON.stringify(patients));
            navigate("/patient-profile");
        }
    };

    const handleDoctorSubmit = (e) => {
        e.preventDefault();
        if (validateDoctor()) {
            console.log("Doctor registration data:", doctorData);
            // Here we'll add the API call for doctor registration
        }
    };

    const validateLogin = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(loginData.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (loginData.password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    };

    const validatePatient = () => {
        if (patientData.name.trim() === "") {
            alert("Name cannot be empty.");
            return false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(patientData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(patientData.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (patientData.password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        if (patientData.password !== patientData.confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        if (parseInt(patientData.age) <= 0) {
            alert("Please enter a valid age.");
            return false;
        }
        return true;
    };

    const validateDoctor = () => {
        if (doctorData.name.trim() === "") {
            alert("Name cannot be empty.");
            return false;
        }
        if (doctorData.specialization.trim() === "") {
            alert("Specialization cannot be empty.");
            return false;
        }
        if (doctorData.license.trim() === "") {
            alert("License number cannot be empty.");
            return false;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(doctorData.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (doctorData.password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                    sx={{ mb: 4 }}
                >
                    <Tab label="Login" />
                    <Tab label="Patient Registration" />
                    <Tab label="Doctor Registration" />
                </Tabs>

                {/* Login Form */}
                {tabValue === 0 && (
                    <Box component="form" onSubmit={handleLoginSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            value={loginData.email}
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    email: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={loginData.password}
                            onChange={(e) =>
                                setLoginData({
                                    ...loginData,
                                    password: e.target.value,
                                })
                            }
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Login
                        </Button>
                    </Box>
                )}

                {/* Patient Registration Form */}
                {tabValue === 1 && (
                    <Box component="form" onSubmit={handlePatientSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            value={patientData.name}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            margin="normal"
                            value={patientData.phone}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    phone: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            value={patientData.email}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    email: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={patientData.password}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    password: e.target.value,
                                })
                            }
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={patientData.confirmPassword}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    confirmPassword: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Age"
                            type="number"
                            margin="normal"
                            value={patientData.age}
                            onChange={(e) =>
                                setPatientData({
                                    ...patientData,
                                    age: e.target.value,
                                })
                            }
                            required
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={patientData.gender}
                                label="Gender"
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        gender: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl component="fieldset" margin="normal">
                            <RadioGroup
                                row
                                value={patientData.disability}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        disability: e.target.value,
                                    })
                                }
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Sign Up as Patient
                        </Button>
                    </Box>
                )}

                {/* Doctor Registration Form */}
                {tabValue === 2 && (
                    <Box component="form" onSubmit={handleDoctorSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            value={doctorData.name}
                            onChange={(e) =>
                                setDoctorData({
                                    ...doctorData,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Specialization"
                            margin="normal"
                            value={doctorData.specialization}
                            onChange={(e) =>
                                setDoctorData({
                                    ...doctorData,
                                    specialization: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="License Number"
                            margin="normal"
                            value={doctorData.license}
                            onChange={(e) =>
                                setDoctorData({
                                    ...doctorData,
                                    license: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            value={doctorData.email}
                            onChange={(e) =>
                                setDoctorData({
                                    ...doctorData,
                                    email: e.target.value,
                                })
                            }
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={doctorData.password}
                            onChange={(e) =>
                                setDoctorData({
                                    ...doctorData,
                                    password: e.target.value,
                                })
                            }
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Sign Up as Doctor
                        </Button>
                    </Box>
                )}
            </Paper>
        </Container>
    );
}

export default Login;
