import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the way", value: "On_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option, index) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    value={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className=" space-y-5">
            {[1, 1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
