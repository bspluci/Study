import React, { Component } from "react";
import axios from "axios";
import Match from "./Match";

class MatchList extends Component {
   state = {
      data: null,
      loading: false,
   };

   getData = async () => {
      this.setState({
         loading: true,
      });

      try {
         const { startDate, endDate } = this.props.range;
         const { leagueId } = this.props;
         const extraQuery = `&from=${startDate}&to=${endDate}&league_id=${leagueId}`;

         const response = await axios.get(
            `https://apiv3.apifootball.com/?action=get_events${extraQuery}&APIkey=aa47b5ff94ecdf71268e9d00a41a235d933f78b96791ba77d24b1338666fb31d`
         );

         this.setState({
            data: response.data,
         });
      } catch (e) {
         console.error(e);
      }

      this.setState({
         loading: false,
      });
   };

   componentDidMount() {
      this.getData();
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.range !== prevProps.range || this.props.leagueId !== prevProps.leagueId) {
         this.getData();
      }
   }

   render() {
      const { data, loading } = this.state;

      return (
         <div>
            {loading && <h3 style={{ textAlign: "center" }}>데이터를 불러오는중입니다...</h3>}
            {!loading && data && !data.error && data.map((data) => <Match key={data.match_id} data={data} />)}
         </div>
      );
   }
}

export default MatchList;
