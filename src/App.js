import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";

import { Header } from "./components/Header";
import { Routes } from "./routes";
import GlogalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <GlogalStyle />
      <Header />
      <Routes />
    </>
  );
};

export default App;
