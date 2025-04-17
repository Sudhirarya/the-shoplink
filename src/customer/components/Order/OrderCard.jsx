import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/&{5}`)}
      className=" p-5 shadow-md shadow-slate-400 hover:shadow-sm border mt-5"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer mt-2">
            <img
              className="w-[7rem] h-[7rem] object-cover  object-top "
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/j/d/c/m-01-deelmo-black-folgen-original-imah7hfxahhankzv.jpeg?q=70"
              alt=""
            />

            <div className=" ml-5 space-y-2 mt-5">
              <p className="">
                Men Printed Cotton Blend Straight Kurta (Black)
              </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹465</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span> Delivered On March 03</span>
              </p>

              <p className="text-xs"> Your Item Has Been Delivered</p>
            </div>
          )}

          {false && <p>Expected Delivery On Mar 03</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
