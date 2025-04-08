import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import Registration from "./Components/Registration";
import ZoncertRecords from "./Sidebar/navComponents/zoncert-components/ZoncertRecords";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zoncertrecords" element={<ZoncertRecords />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
