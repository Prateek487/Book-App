import { useState } from "react";
import { Link } from "react-router-dom";

const SearchTable = (props) => {
  return (
    <div>
      {props.searchData.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.imgThumbnail} />
            <p>{item.authors}</p>
            <h4>{item.publishedDate}</h4>
            <Link to={`/book/:${item.id}`}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default SearchTable;
