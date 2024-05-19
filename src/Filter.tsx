import "./Filter.scss";
import { Button } from "@mui/material";
import { BiSolidEraser } from "react-icons/bi";
import { useAllProduct } from "./context/ProductsContext";
// import { useEffect, useState } from "react";
// interface FilterState {
//   laptop: boolean;
//   mobile: boolean;
//   watch: boolean;
// }
// type FilterKeys = "laptop" | "mobile" | "watch";
export const Filter = () => {
  const { sortingFun, handleCategory, handleClearFiter } = useAllProduct();
  // const [filter, setFilter] = useState<FilterState>({
  //   laptop: false,
  //   mobile: false,
  //   watch: false,
  // });
  const handleFilter = (e: any) => {
    const name = e.target.id;
    // const nameVal = e.target.checked;
    handleCategory(name);
  };

  // useEffect(() => {
  //   handleCategory(activeFilters);
  // }, [filter]);
  return (
    <section className="home-page-filter-">
      <div className="filter-heading">
        <h5>Filter Products</h5>
      </div>

      <div className="filter-option">
        <h6 style={{ marginTop: "20px" }}>Sort</h6>
        <div>
          <input
            type="radio"
            id="ascending"
            name="sorting"
            onChange={sortingFun}
          />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            id="descending"
            name="sorting"
            onChange={sortingFun}
          />
          <label htmlFor="descending">Descending</label>
        </div>
        <h6 style={{ marginTop: "20px" }}>Category</h6>
        <div>
          <input
            type="radio"
            id="laptop"
            name="category"
            onChange={(e) => {
              handleFilter(e);
            }}
          />
          <label htmlFor="laptop">Laptops</label>
        </div>

        <div>
          <input
            type="radio"
            id="mobile"
            name="category"
            onChange={(e) => {
              handleFilter(e);
            }}
          />
          <label htmlFor="mobile">Mobiles</label>
        </div>
        <div>
          <input
            type="radio"
            id="watch"
            name="category"
            onChange={(e) => {
              handleFilter(e);
            }}
          />
          <label htmlFor="watch">Watch</label>
        </div>
      </div>
      <div className="clear-btn">
        <Button
          variant="contained"
          onClick={handleClearFiter}
          endIcon={<BiSolidEraser />}
        >
          Clear Filter
        </Button>
      </div>
    </section>
  );
};
