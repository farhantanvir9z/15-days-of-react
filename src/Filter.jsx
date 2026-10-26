function Filter() {
  return (
    <span className="inline-flex gap-x-2">
      <input type="checkbox" id="filter" />
      <label htmlFor="filter" className="font-semibold text-md">
        Show premium only
      </label>
    </span>
  );
}
export default Filter;
