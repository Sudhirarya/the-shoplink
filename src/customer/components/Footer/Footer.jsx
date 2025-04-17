import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "heroicons-react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="text-center mt-10"
        sx={{
          bgcolor: "black",
          color: "white",
          py: 3,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              About
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Blog
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Press
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Jobs
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Solutions
          </Typography>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Marketing
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Analystics
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Commerce
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Insights
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Guides
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Claim
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Privacy
            </Button>
          </div>

          <div>
            <Button
              variant="text"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                pb: 2,
              }}
            >
              Terms
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", pt: 5 }}>
          <Typography variant="body2" component="p">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p">
            Made with love by me.
          </Typography>
          <Typography variant="body2" component="p">
            Icons made by{" "}
            <a href="https://www.freepik.com" style={{ color: "white" }}>
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com" style={{ color: "white" }}>
              www.flaticon.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
