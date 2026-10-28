function SearchBar({ searchString,  onSettingSearchStr}) {
  return (
    <input
      type="text"
      placeholder="Search cars..."
      value={searchString}
      onInput={
        (e) => {
          onSettingSearchStr(e.target.value)
        }
      }
      className="w-full md:w-1/2 border-2 border-gray-600 rounded-full px-3 py-[6px] md:px-6 py-3"
    />
  );
}

export default SearchBar;
