import React, { Component } from "react";
const profileData = {
   kim: {
      name: "김oo",
      job: "computer programmer",
   },
   lee: {
      name: "이oo",
      job: "bus driver",
   },
};
class Profile extends Component {
   render() {
      const params = this.props.match.params.username;
      const profile = profileData[params];
      return (
         <div>
            {profile.name}의 직업은 {profile.job}
         </div>
      );
   }
}
export default Profile;
