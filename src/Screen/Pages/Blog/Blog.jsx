import React, { useEffect, useState, useRef } from "react";
import { Container, Grid, Typography } from "@mui/material";
import BlogCard from "../../Component/BlogCard";
import { BlogData } from "../../../utils/data";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cardHeights, setCardHeights] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const heights = cardRefs.current.map((ref) => ref.offsetHeight);
    const maxHeight = Math.max(...heights);
    setCardHeights(heights.map(() => maxHeight));
  }, [cardRefs.current]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow p-4 md:p-10">
        <Container sx={{ py: 8 }} maxWidth="full">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "#0494b8" }}
          >
            Blog
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 4, fontSize: "1.5rem" }}
          >
            Join our community of savvy movers to discover expert tips,
            exclusive offers, and personalized moving solutions that ensure a
            smooth and stress-free transition to your new home!
          </Typography>
          <hr className="border-2 border-[#0494b8] w-40 mx-auto my-5"></hr>
          <Grid container spacing={4}>
            {BlogData.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <div ref={(el) => (cardRefs.current[index] = el)}>
                  <BlogCard
                    title={item.title}
                    content={item.content}
                    moreContent={item.moreContent}
                    image={item.image}
                    date={item.date}
                    index={index}
                    height={cardHeights[index]}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Blog;
