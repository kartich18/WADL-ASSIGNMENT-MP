import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import './App.css';

// Import your components
import Navbar from './src/components/Navbar';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Appointment from './src/pages/Appointment';
import PatientProfile from './src/pages/PatientProfile';

// Create theme
const theme = createTheme({
    // Add your theme customization here
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/patient-profile" element={<PatientProfile />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
