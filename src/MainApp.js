import App from "containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

const MainApp = () => {
  return (
    <Router>
      <div className="container-fluid px-0">
        <Header />
        <App />
        <Footer />
      </div>
    </Router>
  );
};

export default MainApp;
