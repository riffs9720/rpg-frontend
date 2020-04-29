import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import { Button, TextField } from '@material-ui/core'
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import './Teste.css';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#fab95f",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
    fontFamily: "Font of Tolkien",
    fontWeight: "bold"
  }
}))(Tooltip);

export default class components extends Component {
  render() {
    return (
      <>
        <div className="containerTeste">
        <LightTooltip
                title="Este é meu mapa"
                placement="right"
              >
          <div className="aqui">

          </div>
          </LightTooltip>
          <LightTooltip
                title="Este é meu mapa2"
                placement="right"
              >
          <div className="aqui2">
            
          </div>
          </LightTooltip>
        </div>
      </>
    );
  }
}
