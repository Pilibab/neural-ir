import "./index.css"
import { Routes, Route } from "react-router-dom";
import SearchPage from "./page/SearchPage";
import ManhwaDetailPage from "./page/ManhwaDetailPage";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/manhwa/:source/:source_id" element={<ManhwaDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
