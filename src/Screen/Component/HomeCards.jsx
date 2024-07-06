import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { HeaderCardData } from "../../utils/data";

const HomeCards = () => {
  return (
    <div className="p-4 mt-5 ">
      {/* First row with inline text */}
      <div className="flex items-center justify-center mb-8 ">
        <div className="border-b border-white-400 w-16 mr-4"></div>
        <h1 className="text-3xl font-bold text-center text-[#0494b8] font-serif">
          A FASHION HUB FOR ALL MASEES
        </h1>
        <div className="border-b border-white-400 w-16 ml-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center ">
        {HeaderCardData.map((data, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-auto ">
            <Card
              sx={{
                bgcolor: "#0494b8",
                height: 250,
              }}
            >
              <CardContent className="text-center bg-[#0494b8]">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {data.subtitle}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
