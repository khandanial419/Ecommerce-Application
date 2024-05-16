import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const CardOnText = ({ imageUrl, txt1, txt2 }) => {
  return (
    <Card component="li" sx={{ width: "100%", height: 400, borderRadius: 0 }}>
      <CardCover>
        <img
          src={imageUrl}
          srcSet={`${imageUrl}&dpr=2 2x`}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardContent
        className="text-center flex justify-center items-center"
        style={{ height: "100%" }}
      >
        <div>
          <Typography
            variant="h5"
            sx={{
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
              bgcolor: "#0494b8",
              borderRadius: 10,
              display: "inline-block",
              padding: "0.2em 0.5em",
              fontFamily: "serif",
            }}
          >
            {txt1}
          </Typography>
          <p
            className="text-[15px] text-white font-serif font-semibold mt-2"
            style={{ maxWidth: "100%" }}
          >
            {txt2}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
export default CardOnText;
