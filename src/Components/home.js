import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Assets from "./Assets";
import Liabilities from "./Liabilities";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

class Home extends React.Component {
  render() {
    return(
    <Router>
      <div>
        <h1>Fin Friend</h1>
        <Box m={2}>
          <Link to="/assets">
          <Button variant="contained" color="primary">
            Assets
            <SentimentSatisfiedAltIcon/>
          </Button>
          </Link>
        </Box>
        <Box m={2}>
          <Link to="/liabilities">
          <Button variant="contained" color="secondary">
            Liabilities
            <SentimentVeryDissatisfiedIcon/>
          </Button>
        </Link>
        </Box>

        <Switch>
          <Route path="/assets">
            <Assets />
          </Route>
          <Route path="/liabilities">
            <Liabilities />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default Home