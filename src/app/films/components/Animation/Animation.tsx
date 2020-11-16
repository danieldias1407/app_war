import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";

import "./Animation.css";
import { useNavigate } from "react-router-dom";

const Animation = () => {
  const [movieText, setMovieText] = useState(375);
  const navigate = useNavigate();

  function enterPage() {
    navigate('/movie');
  }

  useEffect(() => {
    if (movieText > -710) {
      setTimeout(function () {
        setMovieText(movieText - 1);
      }, 50);
    }
  }, [movieText]);

  return (
    <Grid container className="intro-animation" style={{ position: "relative" }}>
      <Grid item className="intro-animation-container">
        <Grid container className="intro-animation-text">
          <span style={{top:movieText}}>          

            <h2> A Long Time Ago, in a galaxy far, far away ... </h2>

            <h2>
              Turmoil has engulfed the
              Galactic Republic. The taxation
              of trade routes to outlying star
              systems is in dispute.
            </h2>

            <h2>
              Hoping to resolve the matter
              with a blockade of deadly
              battleships, the greedy Trade
              Federation has stopped all
              shipping to the small planet
              of Naboo.
            </h2>

            <h2>
              While the Congress of the
              Republic endlessly debates
              this alarming chain of events,
              the Supreme Chancellor has
              secretly dispatched two Jedi
              Knights, the guardians of
              peace and justice in the
              galaxy, to settle the conflict…
            </h2>
          </span>
        </Grid>

        <Button className="button-enter" variant="outlined" color="primary" onClick={enterPage}>
          Entrar
        </Button>
      </Grid>
    
    </Grid>
    
  );
};
export default Animation;
