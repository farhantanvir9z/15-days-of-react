import CarItem from "./CarItem.jsx";

function CarList({ cars, searchString, filterPremium = false }) {
  const rows = [];
  const lowercasedSearchString = searchString.toLowerCase();
  
  cars.forEach(car => {
    const matchesCar = car.title.toLowerCase().includes(lowercasedSearchString);
    const matchesFilter = !filterPremium || car.isPremium;

    if (matchesCar && matchesFilter) {
      rows.push(
        <li key={car.id}>
          <CarItem car={car} />
        </li>
      );
    }
  });

  if (rows.length === 0) {
    return <p className=" text-2xl text-center font-bold shadow-md p-3 rounded-md">No car found!</p>
  }
  
  return <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">{rows}</ul>;
}

export default CarList;
