import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
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
              onClick={handleCheckout}
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

export default Cart;
