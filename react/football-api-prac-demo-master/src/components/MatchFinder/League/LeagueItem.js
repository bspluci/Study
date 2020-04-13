import React, { Component, Fragment } from "react";
import "./LeagueItem.scss";

class LeagueItem extends Component {
   render() {
      const { league_name, setLeagueId, League_id, selected } = this.props;

      return (
         <Fragment>
            <span
               className={`league ${selected && "selected"}`}
               onClick={() => setLeagueId(League_id)}
            >
               {league_name}
            </span>
         </Fragment>
      );
   }
}

export default LeagueItem;
