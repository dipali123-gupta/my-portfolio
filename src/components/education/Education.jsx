import React from "react";
import "./education.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Education() {

  
  return (
    <div className="education" id="education">
      <div className="heading">
        <img className="education" src="asset/school-solid.svg" />
        <h1>
          My <span>Education</span>
        </h1>
      </div>
      <div className="card">
        <div className="card1">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="asset/bidhan.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: 24,
                    color: "rgb(3, 3, 44)",
                    fontWeight: 600,
                  }}
                >
                  Bidhan Chandra Institution for girls
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card2">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="asset/bcroy.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: 24,
                    color: "rgb(3, 3, 44)",
                    fontWeight: 600,
                  }}
                >
                  DR. B.C. Roy Engineering College
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card3">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="asset/vit.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: 24,
                    color: "rgb(3, 3, 44)",
                    fontWeight: 600,
                  }}
                >
                  Vellore Institute of Technology, Bhopal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Education;
