import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

const JoYCard = ({ imageUrl, title, location, img2Url, Icons, path }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    console.log("Image clicked");
    navigate(path); // Navigate to the specified path
  };

  return (
    <Card
      sx={{
        minHeight: "900px",
        width: {
          xs: "100%",
          sm: "calc(50% - 16px)",
          md: "100%",
          lg: "100%",
        },

        position: "relative",
        cursor: "pointer",
      }}
      onClick={handleImageClick}
    >
      <CardCover>
        <img
          src={imageUrl}
          loading="lazy"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </CardCover>

      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography level="title-lg" textColor="#fff">
          {title}
        </Typography>
        <Typography startDecorator={Icons} textColor="neutral.300">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JoYCard;
