import React from "react";
import { ItemList } from "../Helpers/Itemlist";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Varsity Variety </h1>
      <div className="menuList">
        {ItemList.map((menu, key) => {
          return (
            <MenuItem
              image={menu.image}
              name={menu.name}
              rating={menu.rating}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
