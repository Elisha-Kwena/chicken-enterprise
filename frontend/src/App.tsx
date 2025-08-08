import React, { useEffect } from "react";
import { BrowserRouter , useLocation} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from './components/common/Navbar/Navbar'
import { ROUTES } from "./constants/routes";
import ErrorBoundary from "./components/ui/Errors/ErrorBoundary";
import Loader from './components/ui/Loader/Loader';


import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const AppLayout: React.FC = () => {

  const location = useLocation();
  const noNavbarRoutes = [
    ROUTES.LOGIN, 
    ROUTES.SIGNUP
  ]; // Add any routes that should not show the navbar


  useEffect(() => {
    AOS.init({
      duration: 800,       // Animation duration (ms)
      once: false,   
      // mirror:false,       // Only animate once
      easing: 'ease-in-out' // Animation curve
    });

    return () => {
      AOS.refresh(); // Refresh AOS on unmount
    }
  }, []);
  return(
    <>
    {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
    <AppRouter/>
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  if(isLoading) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
    </ErrorBoundary>

  );

}

export default App;
