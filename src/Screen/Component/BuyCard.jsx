import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const BuyCard = ({ product, hanldeAdd }) => {
  const { image_url, name, link, price, stock } = product;
  const navigate = useNavigate();
  const handleAddtoCart = (product) => {
    const userData = Cookies.get("user");
    if (!userData) {
      navigate("/login");
    } else {
      hanldeAdd(product);
    }
  };
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        borderColor: "#0494b8",
      }}
    >
      {/* <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}></AspectRatio>
      </CardOverflow> */}
      <CardContent>
        <img src={image_url} loading="lazy" alt={name} />
        <Typography level="body-xs">{name}</Typography>
        <Link
          href={link}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
        >
          {name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          ${price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow className="bg-[#0494b8]">
        <Button
          variant="solid"
          color=""
          size="lg"
          className="text-[#fff] "
          onClick={() => handleAddtoCart(product)}
        >
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default BuyCard;
