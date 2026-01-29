import "./index.css"
import { Routes, Route } from "react-router-dom";
import SearchPage from "./page/SearchPage";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
      </Routes>
    </div>
  )
}

export default App
