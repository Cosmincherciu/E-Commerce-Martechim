import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="ml-auto">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Goleste Cosul
              </button>
            </Link>
            <h5>
              <span className="text-uppercase">Cost Produse : </span>
              <strong>{cartSubTotal} Lei</strong>
            </h5>
            <h5>
              <span className="text-uppercase">Cost Livrare : </span>
              <strong>{cartTax} Lei</strong>
            </h5>
            <h5>
              <span className="text-uppercase">Total : </span>
              <strong>{cartTotal} Lei</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
