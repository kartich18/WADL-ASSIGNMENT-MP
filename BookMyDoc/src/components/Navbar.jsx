import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
    return (
        <AppBar position="static" sx={{ width: '100%' }}>
            <Toolbar sx={{ maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
                <Typography
                    variant="h5"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                    }}
                >
                    BookMyDoc
                </Typography>
                <Box>
                    <Button
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        sx={{ mx: 1 }}
                    >
                        Home
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/about"
                        color="inherit"
                        sx={{ mx: 1 }}
                    >
                        About
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/login"
                        color="inherit"
                        sx={{ mx: 1 }}
                    >
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
