import React from "react";

function Menu({ name }) {
  return (
    <ul>
      <li>
        <a href="#none">{name}</a>
      </li>
    </ul>
  );
}

export default Menu;
