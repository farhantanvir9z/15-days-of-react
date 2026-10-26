import SearchBar from "./SearchBar.jsx";
import Filter from "./Filter.jsx";

function SubHeader() {
  return (
    <section className="flex flex-col md:flex-row gap-3 items-end md:items-center md:gap-6">
      <SearchBar />
      <Filter />
    </section>
  );
}

export default SubHeader;
