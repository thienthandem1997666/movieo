import React from "react";

function Description(props) {
  return (
    <div className="modal--details">
      <div className="details--header">
        <div className="details--name">
          {`${props.name} (${props.release})`}
        </div>
      </div>
      <div className="details--content">
        <p>{props.details}</p>
        <p>{`Runtime: ${props.runtime} minutes`}</p>
      </div>
      <div className="details--footer">
        <div className="details--rating">{`Ratings: ${props.rating}`}</div>
        <div className="details--vote">{`Votes: ${props.vote}`}</div>
      </div>
    </div>
  );
}

export default Description;
