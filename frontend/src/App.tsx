import QueryPanel from "./feature/search/QueryPanel"
import ContainerPanel from "./ui/ContainerPanel/ContainerPanel"

import "./index.css"
import ResultsPanel from "./feature/search/ResultPanel"
import { search } from "./service/mahwaService"
import { useEffect, useState } from "react"
import type { ManhwaResult } from "./feature/search/types"
import SynopsisField from "./feature/manhwa/SynopsisField/SynopsisField"
import CustomButton from "./ui/CustomButton/CustomButton"

function App() {
  const [results, setResults] = useState<ManhwaResult[]>([]);

  useEffect(() => {
      const data = search(); // mock for now
      setResults(data);

      // TODO: add dependencies based on provider query (context that see if button is clicked it also pass the query tet)
  }, []);


    const [currIdx, setCurrIdx] = useState(0)

    // helper ensures idx stays i bound 
    const canGoPrev = currIdx > 0;
    const canGoNext = currIdx < results.length - 1;

    const handleNext = () => {
        if (canGoNext) setCurrIdx(prevIdx => prevIdx + 1);
    };

    const handlePrev = () => {
        if (canGoPrev) setCurrIdx(prevIdx => prevIdx - 1);
    };

  return (
    <div className="App">
      <ContainerPanel>
        <QueryPanel/>
            <SynopsisField
            >
              {results[currIdx].synopsis}
            </SynopsisField>      </ContainerPanel>
      <ContainerPanel>
        <ResultsPanel currIdx={currIdx} results={results}/>
          {// TODO: MAKE IT SO THAT BUTTON IS NOT CLICKABLE FOR RESPECTIVE BOUND 
            }
          <div className="button-container">
            <CustomButton
                onClick={handlePrev} 
                disabled={!canGoPrev}
            >{"<"}</CustomButton>
            <CustomButton
                onClick={handleNext} 
                disabled={!canGoNext}
            >{">"}</CustomButton>            
          </div>

      </ContainerPanel>
    </div>
  )
}

export default App
