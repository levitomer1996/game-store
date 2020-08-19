import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./Comps/ProductCard";
import Grid from "@material-ui/core/Grid";

import ShareModal from "./Comps/ShareModal";

import getProductByCategory from "./Comps/getProductByCategory";
import renderBackGround from "./Comps/renderBackGround";
import isShowModalHandler from "./Comps/isShowModalHandler";

const CategoryPage = () => {
  const [backGround, setBackGround] = useState();
  const { category } = useParams("category/:id");
  const [prodList, getProd] = getProductByCategory();
  const [isShow, toggleShowModal] = isShowModalHandler();

  useEffect(() => {
    getProd(category);
    setBackGround(renderBackGround(category));
    console.log(backGround);
  }, [category]);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <ShareModal isShow={isShow} />
      {prodList.map((item) => {
        return (
          <Grid item xs={12} sm={3}>
            <ProductCard
              title={item.name}
              key={item._id}
              img={item.img}
              price={item.price}
              id={item._id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default CategoryPage;
