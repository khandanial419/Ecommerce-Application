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

const BuyCard = ({ product }) => {
  const { image_url, name, link, price, stock } = product;

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
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
          endDecorator={<FavoriteBorderIcon />}
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
          {price} THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow className="bg-[#0494b8]">
        <Button variant="solid" color="" size="lg" className="text-[#fff] ">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default BuyCard;
