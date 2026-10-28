function Filter({ filterPremium, onFilterPremium }) {
  return (
    <span className="inline-flex gap-x-2">
      <input type="checkbox" id="filter" 
      onClick={
        (e) => {
          onFilterPremium(e.target.checked)
        }
      }
        />
      <label htmlFor="filter" className="font-semibold text-md">
        Show premium only
      </label>
    </span>
  );
}
export default Filter;
