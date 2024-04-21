import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-semibold text-center">React-Router</h1>
      <Outlet />
    </>
  );
}

export default App;
