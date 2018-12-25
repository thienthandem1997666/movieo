import React from "react";

function Item(props) {
  return (
    <div
      className="list--item--card"
      onClick={e => props.showHoverOnClick(props.href, e)}
    >
      <a className="card--photo" href={props.href}>
        <span className="photo--wrapper">
          <img src={props.imgSrc} alt={props.alt} />
        </span>
      </a>
      <div className="card--details">
        <div className="details--name">{props.name}</div>
        <div className="details--release">{props.release}</div>
      </div>
    </div>
  );
}

export default Item;
