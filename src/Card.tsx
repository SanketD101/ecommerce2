import "./HeroPage.scss";
import { useAllProduct } from "./context/ProductsContext";
export const Card = (props: any) => {
  const { addToCart, cart, removeAddedItem } = useAllProduct();

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.value.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.value.name} $ {props.value.price}
          </h5>
          <p className="card-text">{props.value.description}</p>
          {!cart.some((p: any) => p.id === props.value.id) ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                cart.length < 7 && addToCart(props.value);
              }}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="btn btn-danger ms-1"
              onClick={() => removeAddedItem(props.value.id)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
