

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut }) {
  return (
    <ul className="cards">
     {plants.map((plant, index) => (
  <PlantCard 
    key={plant.id || index} 
    plant={plant} 
    onToggleSoldOut={onToggleSoldOut}
  />
      ))}
    </ul>
  );
}

export default PlantList;