import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddDay from "./component/AddDay";
import AddWord from "./component/AddWord";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import Home from "./component/Home";
import Page404 from "./component/Page404";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/days" element={<DayList />} />
          <Route path="/days/:day" element={<Day />} />
          <Route path="/days/add" element={<AddDay />} />
          <Route path="/words/add" element={<AddWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
