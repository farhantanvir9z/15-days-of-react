function CarDesc({ car }) {
  return (
    <div className="shadow-lg p-4 md:p-6 rounded-lg">
      <h2 className="font-bold text-2xl mb-2">{car.title}</h2>
      <p>
        <span className="font-semibold">Brand:</span> {car.brand}
      </p>
      <p>
        <span className="font-semibold">Year:</span> {car.year}
      </p>
      <p>
        <span className="font-semibold">Price:</span> ${car.price}
      </p>
      <p>
        <span className="font-semibold">Premium: </span> {car.isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default CarDesc;
