import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

function Main() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default Main;