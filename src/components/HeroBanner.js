import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mb="53px"
        mt="23px"
      >
        Sweat, Smile <br /> sand Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" mb="18px">
        Explore Exercise
      </Button>
      <Typography
        mt="14px"
        padding="10px"
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
