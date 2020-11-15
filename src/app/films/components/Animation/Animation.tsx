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
              São tempos muito difícies! Por isso, Glaucia Lemos precisa
              encontrar o sabre de luz para que possa obter poderes de programar
              como nenhuma pessoa na galáxia. E com isso, ela inicia a sua busca
              por toda a galáxia. Durante a sua busca, Glaucia se depara com um
              planeta chamado Tatooine. E é justamente ali que ela iniciará todo
              o seu treinamento para conseguir os seus poderes novamente.
            </h2>

            <h2>
              São tempos muito difícies! Por isso, Glaucia Lemos precisa
              encontrar o sabre de luz para que possa obter poderes de programar
              como nenhuma pessoa na galáxia. E com isso, ela inicia a sua busca
              por toda a galáxia. Durante a sua busca, Glaucia se depara com um
              planeta chamado Tatooine. E é justamente ali que ela iniciará todo
              o seu treinamento para conseguir os seus poderes novamente.
            </h2>

            <h2>
              São tempos muito difícies! Por isso, Glaucia Lemos precisa
              encontrar o sabre de luz para que possa obter poderes de programar
              como nenhuma pessoa na galáxia. E com isso, ela inicia a sua busca
              por toda a galáxia. Durante a sua busca, Glaucia se depara com um
              planeta chamado Tatooine. E é justamente ali que ela iniciará todo
              o seu treinamento para conseguir os seus poderes novamente.
            </h2>

            <h2>
              São tempos muito difícies! Por isso, Glaucia Lemos precisa
              encontrar o sabre de luz para que possa obter poderes de programar
              como nenhuma pessoa na galáxia. E com isso, ela inicia a sua busca
              por toda a galáxia. Durante a sua busca, Glaucia se depara com um
              planeta chamado Tatooine. E é justamente ali que ela iniciará todo
              o seu treinamento para conseguir os seus poderes novamente.
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
