import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter.jsx";

function SubHeader({ searchString , onSettingSearchStr, filterPremium, onFilterPremium }) {
  return (
    <section className="flex flex-col md:flex-row gap-3 items-end md:items-center md:gap-6">
      <SearchBar searchString={searchString} onSettingSearchStr={onSettingSearchStr} />
      <Filter 
        filterPremium={filterPremium}
        onFilterPremium={onFilterPremium}
        />
    </section>
  );
}

export default SubHeader;
