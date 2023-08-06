import { useState } from "react";
import RatingCard from "./Components/RatingCard";
import ThankYou from "./Components/ThankYou";
import { RateContext } from "./Contexts/RateContext";

function App() {
  const [isUserRated, setIsUserRated] = useState(true);
  const [rateValue, setRateValue] = useState("");
  const rateData = { rateValue, setRateValue, isUserRated, setIsUserRated };

  return (
    <div className="App">
      <RateContext.Provider value={rateData}>
        {isUserRated ? <ThankYou /> : <RatingCard />}
      </RateContext.Provider>
    </div>
  );
}

export default App;
