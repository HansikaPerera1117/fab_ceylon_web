import Routes from "./Routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import "./styles/commonStyles.scss";

const App = () => {
  return (
    <>
      {" "}
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
