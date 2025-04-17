import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
const OrderSummary = () => {
  return (
    <div>
      <div className=" p-5  shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="UpperCase font-bold opacity-60 pb-4">price details</p>
            <hr />

            <div className="space-y-3  font-semibold mt-10">
              <div className="flex justify-between pt-3 px-3 text-black">
                <span>price</span>
                <span>₹4689</span>
              </div>

              <div className="flex justify-between pt-3 px-3 text-black">
                <span>Discount</span>
                <span className=" text-green-600">-₹3419</span>
              </div>

              <div className="flex justify-between pt-3 px-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 px-3 text-black">
                <span> Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>

            <Button
              variant="container"
              className="w-full mt-5"
              sx={{
                px: "2.5rem",
                py: ".3rem",
                bgcolor: "#9155fd",
              }}
            >
              {" "}
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
