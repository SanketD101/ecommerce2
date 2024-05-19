import { useState } from "react";
import "./ModelCart.scss";

export const ModelCart = () => {
  const [showModel, setShowModel] = useState(false);
  const ModelData = () => {
    return (
      <section className="model">
        <div className="model-shop">
          <button onClick={() => setShowModel(false)}>close window</button>
        </div>
      </section>
    );
  };
  return (
    <div className="">
      <button onClick={() => setShowModel(!showModel)}>ShowModel</button>
      {showModel && <ModelData />}
    </div>
  );
};
