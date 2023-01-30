import * as React from "react";

const Card = (img_path: string, tittle: string, desc: string, price: false) => {
  return (
    <div>
      <div>
        <img src={img_path} alt='' />
      </div>
      <div>
        <h3>{tittle}</h3>
        <p className={price ? "font-bold" : ""}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
