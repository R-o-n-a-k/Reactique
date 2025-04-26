import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateOnScroll from "./components/AnimateOnScroll";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <AnimateOnScroll />
    </>
  );
}

export default App;
