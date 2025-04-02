import { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Paper,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";

function PatientProfile() {
    const [patientData, setPatientData] = useState(null);

    useEffect(() => {
        const patients = JSON.parse(localStorage.getItem("patients")) || [];
        if (patients.length > 0) {
            setPatientData(patients[patients.length - 1]);
        }
    }, []);

    if (!patientData) {
        return (
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h6" align="center" color="text.secondary">
                    No patient data found.
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Patient Profile
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Name"
                                secondary={patientData.name}
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary="Phone"
                                secondary={patientData.phone}
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary="Email"
                                secondary={patientData.email}
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary="Age"
                                secondary={patientData.age}
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary="Gender"
                                secondary={
                                    patientData.gender.charAt(0).toUpperCase() +
                                    patientData.gender.slice(1)
                                }
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText
                                primary="Disability"
                                secondary={
                                    patientData.disability
                                        .charAt(0)
                                        .toUpperCase() +
                                    patientData.disability.slice(1)
                                }
                                primaryTypographyProps={{
                                    variant: "subtitle1",
                                    fontWeight: "bold",
                                }}
                                secondaryTypographyProps={{ variant: "body1" }}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}

export default PatientProfile;
