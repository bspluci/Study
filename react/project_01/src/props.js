import React from "react";
import PropTypes from "prop-types";

const coffeeList = [
  {
    id: 1,
    name: "인절미 티라미수 라떼",
    image:
      "http://mmthcoffee.com/data/file/mm_new/thumb-3546841901_VmiZDqt7_92d6c8ff33fddf476e1081ed01e0a9e712766afa_216x216.png",
    rating: 4.2
  },
  {
    id: 2,
    name: "인절미 티라미수 스무디",
    image:
      "http://mmthcoffee.com/data/file/mm_new/thumb-3546841901_TMFamDNE_dd6b3fbf2a1811a0025eef13a42132bbd628cede_216x216.png",
    rating: 4
  },
  {
    id: 3,
    name: "허니 체스트넛 마키아토",
    image:
      "http://mmthcoffee.com/data/file/mm_new/thumb-3546841901_9vt2bkWr_83d74d71994457ff9c88cbe20108213a9ca3e2a4_216x216.png",
    rating: 5
  },
  {
    id: 4,
    name: "허니 체스트넛 모카",
    image:
      "http://mmthcoffee.com/data/file/mm_new/thumb-3546841901_W4l2rpUh_f0bf85363aa831b7e925d1aef7700e920af7a2a7_216x216.png",
    rating: 3.9
  }
];

function Coffee({ name, image, rating }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{rating} / 5.0</p>
    </div>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {coffeeList.map(menu => (
        <Coffee
          key={menu.id}
          name={menu.name}
          image={menu.image}
          rating={menu.rating}
        />
      ))}
    </div>
  );
}

export default App;
