import { Card } from "./Card";
import { useAllProduct } from "./context/ProductsContext";
import { Filter } from "./Filter";
import "./HeroPage.scss";

export const HeroPage = () => {
  const { tempProducts, isLoading } = useAllProduct();
  if (isLoading) {
    return (
      <div className="loading-list">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <section className="home-page">
      <div className="home-page-filter">
        <Filter />
      </div>
      <div className="home-page-cart">
        {tempProducts &&
          tempProducts.map((item: any) => <Card key={item.id} value={item} />)}
      </div>
    </section>
  );
};
