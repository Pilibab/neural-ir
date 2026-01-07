import QueryPanel from "./feature/search/QueryPanel"
import ContainerPanel from "./ui/ContainerPanel/ContainerPanel"

import "./index.css"
import ResultsPanel from "./feature/search/ResultPanel"
import { search } from "./service/mahwaService"
import { useEffect, useState } from "react"
import type { ManhwaResult } from "./feature/search/types"

function App() {
  const [results, setResults] = useState<ManhwaResult[]>([]);

  useEffect(() => {
      const data = search(); // mock for now
      setResults(data);

      // TODO: add dependencies based on provider query (context that see if button is clicked it also pass the query tet)
  }, []);

  return (
    <div className="App">
      <ContainerPanel>
        <QueryPanel/>
      </ContainerPanel>
      <ContainerPanel>
        <ResultsPanel results={results}/>
        {null}
      </ContainerPanel>
    </div>
  )
}

export default App
