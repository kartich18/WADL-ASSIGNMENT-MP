import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 8,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
            >
                Step into a Healthier Tomorrow with BookMyDoc
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                Putting Your Health First, Always
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/appointment")}
                    sx={{
                        px: 4,
                        py: 2,
                        fontSize: "1.2rem",
                    }}
                >
                    Book an Appointment
                </Button>
            </Box>
        </Container>
    );
}

export default Home;
