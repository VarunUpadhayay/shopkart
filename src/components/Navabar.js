import React from "react";
import line1 from "../images/line1.png";
import "../style/Navbar.css";

const Navbar = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <nav>
      <div className="line1">
        <img src={line1} />
      </div>

      <ul className="navbar">
        {navbar.map((item) => (
          <li key={item.id} className="navbar-item">
            {item.child ? (
              <>
                <span className="navbar-item-name">{item.name}</span>
                <ul className="sub-menu">
                  {item.child.map((subItem) => (
                    <li key={subItem.id} className="sub-menu-item">
                      <a href={`#${subItem.id}`}>{subItem.name}</a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href={`#${item.id}`} className="navbar-item-name">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
