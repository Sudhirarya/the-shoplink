import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className=" w-full h-full object-cover  object-top"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/e/o/9/32-kjo-2395-ak-anklft-dkindg-killer-original-imah7hy5zfhfmx7j.jpeg?q=70"
            alt=""
          />
        </div>

        <div className=" mt-6 space-y-1 px-3">
          <p className="font-semibold">Men Skinny Mid Rise Dark Blue Jeans</p>
          <p className="opacity-70"> Size: L, Blue</p>
          <p className="opacity-70 mt-2">Seller: KILLER </p>
          <div className=" flex space-x-5 text-gray-950 pt-6">
            <p className=" font-semibold">₹199 </p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex  items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-.05 px-6 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button
            sx={{ color: "RGB(145 85 253) " }}
            className=" font-bold  text-sm"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
