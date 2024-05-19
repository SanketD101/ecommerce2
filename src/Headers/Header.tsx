import { useAllProduct } from "../context/ProductsContext";
import { IconButton } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { Dropdown } from "react-bootstrap";
import "./Header.scss";
import { MdDelete } from "react-icons/md";

export const Header = () => {
  const { tempProducts, cart, removeAddedItem } = useAllProduct();

  return (
    <>
      <nav className="nav-section navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="fs-4 fw-bold">Logo</div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
          <span>Products({tempProducts.length})</span>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <IconButton aria-label="cart">
                <Badge badgeContent={cart && cart.length} color="primary">
                  <MdOutlineShoppingCart />
                </Badge>
              </IconButton>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ padding: "5px", width: "20vw" }}>
              {cart.map((item: any) => {
                return (
                  <div className="drop-items" key={item.id}>
                    <div className="card-style">
                      <img className="drop-img" src={item.image} />
                      <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                        {item.name}
                      </span>
                      <MdDelete onClick={() => removeAddedItem(item.id)} />
                    </div>
                  </div>
                );
              })}
              <h5>
                Total : $
                {cart.reduce((pre: any, curr: any) => pre + curr.price, 0)}
              </h5>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};
