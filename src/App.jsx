// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import UserPage from "./page/UserPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

//import RegistrPage from "./page/RegistrPage";


const App = () => {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element = {<RegistrPage />}/> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<UserPage />} />

        </Routes>
      </BrowserRouter>
    </Provider>

  );
};


export default App;
