import { RoutesComponent } from "./routes";
import { GlobalStyle } from "./styles/global";


import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";




export const App = () => {
  return (
    <>
      <GlobalStyle />

      <RoutesComponent />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
