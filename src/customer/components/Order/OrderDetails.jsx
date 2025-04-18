import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";

import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <Grid
            key={index}
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/e/o/9/32-kjo-2395-ak-anklft-dkindg-killer-original-imah7hy5zfhfmx7j.jpeg?q=70"
                  alt=""
                />

                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Men Skinny Mid Rise Dark Blue Jeans
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Blue</span> Size:32
                  </p>
                  <p>Seller: KILLER </p>
                  <p>₹1399</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2.5rem" }} className="px-2" />
                <span>Rate & Reviews Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
