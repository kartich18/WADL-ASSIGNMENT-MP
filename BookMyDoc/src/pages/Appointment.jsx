import { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Appointment() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we'll add the API call to save appointment data
        console.log("Appointment data:", formData);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box mb={4}>
                <TextField
                    fullWidth
                    placeholder="Search for Doctor"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>

            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Book an Appointment
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Fill in the details below to schedule your appointment.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        type="date"
                        label="Date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        fullWidth
                        type="time"
                        label="Time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Appointment;
