import React from "react";

function Kakao({ name, img }) {
   return (
      <li>
         <h1>{name}</h1>
         <img src={img} alt={name} />
      </li>
   );
}

const kakaoCharacter = [
   {
      id: 1,
      name: "라이언",
      img: "https://t1.daumcdn.net/friends/prod/category/category_rion_on.png"
   },
   {
      id: 2,
      name: "어피치",
      img: "https://t1.daumcdn.net/friends/prod/category/category_apeach_on.png"
   },
   {
      id: 3,
      name: "무지",
      img: "https://t1.daumcdn.net/friends/prod/category/category_muzi_on.png"
   },
   {
      id: 4,
      name: "튜브",
      img: "https://t1.daumcdn.net/friends/prod/category/category_tube_on.png"
   },
   {
      id: 5,
      name: "네오",
      img: "https://t1.daumcdn.net/friends/prod/category/category_neo_on.png"
   },
   {
      id: 6,
      name: "프로도",
      img: "https://t1.daumcdn.net/friends/prod/category/category_frodo_on.png"
   }
];

function kakaoFriends(KF) {
   return <Kakao key={KF.id} name={KF.name} img={KF.img} />;
}

function App() {
   return <ul className="App">{kakaoCharacter.map(kakaoFriends)}</ul>;
}

export default App;
