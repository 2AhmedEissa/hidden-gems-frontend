import { useEffect, useState } from "react";
import GemItem from "../../Components/Gems/GemItem";
import GemDetails from "../../Components/Gems/GemDetails";
import axios from "axios";


import { mockGems } from "../../data/mockData.js";

export default function Gems() {
    const [selectedGem, setSelectedGem] = useState(null); //nothing selected
    const handleSelectedGem = (gemId) => {
        // console.log("Selected gem ID:", gemId);
        setSelectedGem(gemId);
    }
    const [gemsData, setGemsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(()=>{
      // Use mock data directly
      setGemsData(mockGems);
      setIsLoading(false);
    }, [])

  if(selectedGem !== null){
    return(
      <>
      <button onClick={()=>setSelectedGem(null)}>Back to Gems List</button>
        <GemDetails gemId={ selectedGem } />
      </>
    )
  }
  return (
    gemsData.map(
      (gem)=>{
        return <GemItem key={gem._id} gemId={gem._id} gem={gem} onSelect={handleSelectedGem} /> //gem 
      }
    ))
}