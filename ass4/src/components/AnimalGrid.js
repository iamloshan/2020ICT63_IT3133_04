import React from "react";

const AnimalsGrid = ({
  animals,
  checkResult,
  selectedAnimal,
  setSelectedAnimal,
}) => {
  return (
    <div className="border-orange">
      <h3>Choose an Animal</h3>
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="animal-card"
            onClick={() => {
              setSelectedAnimal(animal.name);
              checkResult(animal.name);
            }}
          >

          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalsGrid;