import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default App;
