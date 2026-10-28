import Header from "./Header.jsx";
import SubHeader from "./SubHeader.jsx";
import CarList from "./CarList.jsx";
import { useState } from "react";

function App() {
  
  // Mock Data of cars (later it will come from api)
  const CARS = [
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false
    },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true }
  ];
  
  // creating a state for searching cars
  const [searchString, setSearchString] = useState("");
  
  // creating a state for filtering premium cars
  
  const [filterPremium, setFilterPremium] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <Header />
      <SubHeader
        searchString={searchString}
        onSettingSearchStr={setSearchString}
        filterPremium={filterPremium}
        onFilterPremium={setFilterPremium}
      />
      <CarList cars={CARS} searchString={searchString} filterPremium={filterPremium} />
    </div>
  );
}

export default App;
