import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../../Redux/CartSlice";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  console.log(cartItems);
  const calculatedPrice = cartItems.reduce((totalPrice, item) => {
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
      return totalPrice + price;
    } else {
      return totalPrice;
    }
  }, 0);

  const handlePay = async () => {
    const stripe = await loadStripe(
      "pk_test_51P2cGzII2WH8wiPYxIyks2JtYkyutA7xIgL3bdpKxQKnKPpAkO2eXiGilKI3tTMKcX6mEeqny1a1I9REeMLt7c3o00VBQgmoKj"
    );
    const body = { products: cartItems };

    try {
      const response = await fetch(
        "http://localhost:8000/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center my-10">
      <h2 className="text-3xl font-bold text-[#0494b8] mb-10">CART PAGE</h2>
      {cartItems.length > 0 ? (
        <div className="w-full max-w-5xl mx-auto px-4 gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {cartItems.map((item, index) => (
              <Card
                key={index}
                sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}
              >
                <AspectRatio ratio="2/3">
                  <img src={item.image_url} loading="lazy" alt={item.name} />
                </AspectRatio>
                <CardContent>
                  <Typography level="body-xs">{item.name}</Typography>
                  <Typography level="body-md" sx={{ mt: 1 }}>
                    ${item.price}
                  </Typography>
                  <Typography level="body-sm" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardOverflow>
                  <Button
                    variant="solid"
                    color="primary"
                    size="lg"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </CardOverflow>
              </Card>
            ))}
          </div>
          <div className="w-full flex justify-end mt-10">
            <Button
              variant="solid"
              color="primary"
              size="lg"
              onClick={handlePay}
            >
              Pay ${calculatedPrice.toFixed(2)}
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600 mt-8">
          No products added to the cart.
        </p>
      )}
    </div>
  );
};

export default Cart;
