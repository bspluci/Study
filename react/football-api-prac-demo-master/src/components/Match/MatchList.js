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
         const extraQuery = `&from=${startDate}&to=${endDate}`;

         const response = await axios.get(
            `https://apiv2.apifootball.com/?action=get_events${extraQuery}&league_id=148&APIkey=83407abdf2c88a3b221747309a2b9a2191f2cbfc90390451890aee48bb15eef9`
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
      if (this.props.range !== prevProps.range) {
         this.getData();
      }
   }

   render() {
      const { data, loading } = this.state;

      return (
         <div>
            {loading && <h3 style={{ textAlign: "center" }}>데이터를 불러오는중입니다...</h3>}
            {!loading &&
               data &&
               !data.error &&
               data.map((data) => <Match key={data.match_id} data={data} />)}
         </div>
      );
   }
}

export default MatchList;
