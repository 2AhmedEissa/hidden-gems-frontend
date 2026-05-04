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
      const url = import.meta.env.VITE_Base_URL + "/gems";
      axios.get(url).then((res)=>{  //api
        const result = res.data.result || res.data;
        setGemsData(Array.isArray(result) ? result : []);
        setIsLoading(false);
      }).catch((err)=>{
        console.error("Error fetching gems, using mock data:", err);
        setGemsData(mockGems);
        setIsLoading(false);
      })
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