import React, { useContext } from "react";
import Product from "../Product";
import p1 from "../../assets/bp3.png";
import p2 from "../../assets/sp3.png";
import p3 from "../../assets/sp2.png";
import p4 from "../../assets/sp1.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/bp4.png";
import p7 from "../../assets/sp4.png";
import p8 from "../../assets/p10.png";
import p9 from "../../assets/np1.png";
import { ApiData } from "../ContextApi";

function ProductShop() {
  let data = useContext(ApiData);
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-10">
        {data.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={`$${item.price}`}
            color={item.brand}
            batch={`${item.discountPercentage}%`}
            src={item.thumbnail}
          />
        ))}

        {/* <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' batch='-10%' src={p2}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' src={p3}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' src={p4}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' batch='New' src={p5}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black'  src={p6}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' batch='-10%' src={p7}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' batch='-15%' src={p3}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' batch='-10%' src={p4}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' src={p8}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' src={p9}/>
            <Product title='Basic Crew Neck Tee' price='$44.00' color='Black' src={p7}/> */}
      </div>
    </div>
  );
}

export default ProductShop;
