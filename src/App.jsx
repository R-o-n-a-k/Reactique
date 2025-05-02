import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateOnScroll from "./components/AnimateOnScroll";
import ToastAlert from "./components/ToastAlert";

function App() {
  return (
    <>
      <ToastAlert />
      <Router>
        <AppRoutes />
      </Router>
      <AnimateOnScroll />
    </>
  );
}

export default App;
