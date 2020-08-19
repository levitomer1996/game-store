import React, { useEffect } from "react";

import useGetUserOrders from "../hooks/useGetUserOrders";
//Comps
import { Grid } from "@material-ui/core";
//Spinner will be render while awating for response from server.
import Spinner from "./OrderpageComps/Spinner";
import OrderCard from "./OrderpageComps/OrderCard";

export default function OrdersPage() {
  const [getOrders, ordersList, spinner] = useGetUserOrders();
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div>
      {spinner ? (
        <Spinner />
      ) : (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ borderBottom: "1px solid #FFC107" }}
        >
          <Grid item xs={12} sm={4}>
            Order Number
          </Grid>
          <Grid item xs={12} sm={4}>
            Time Placed
          </Grid>
          <Grid item xs={12} sm={2}>
            Products
          </Grid>
          <Grid item xs={12} sm={1}>
            Status
          </Grid>
          <Grid item xs={12} sm={1}>
            Total
          </Grid>
        </Grid>
      )}
      {spinner
        ? null
        : ordersList.map((order) => {
            return (
              <OrderCard
                key={order._id}
                num={order._id}
                timePlaced={order.time_submited}
                total={order.total_payment}
                status={order.status}
              />
            );
          })}
    </div>
  );
}
