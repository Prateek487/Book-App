import { useRef, useState } from "react";
import Logout from "../Components/Logout";
import SearchTable from "../Components/SearchTable";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const SearchInputRef = useRef();
  const OnsubmitHandler = (event) => {
    event.preventDefault();
    const searchVal = SearchInputRef.current.value;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q={${searchVal}}+intitle`
    )
      .then((result) => {
        if (!result) {
          console.log("error");
          throw new Error("Not Found");
        }
        fetch(
          `https://project2-d2b83-default-rtdb.firebaseio.com/UserSearch/${localStorage.getItem(
            "UserData"
          )}/.json`,
          {
            method: "POST",
            body: JSON.stringify({
              SerchItem: searchVal,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          console.log(res);
        });
        return result.json();
      })
      .then((data) => {
        console.log(data);
        const searchTable = [];
        for (let item in data.items) {
          const temp = {
            title: data.items[item].volumeInfo.title,
            authors: data.items[item].volumeInfo.authors,
            publishedDate: data.items[item].volumeInfo.publishedDate,
            id: data.items[item].id,
            imgThumbnail: data.items[item].volumeInfo.imageLinks.thumbnail,
          };
          searchTable.push(temp);
        }
        console.log(searchTable);
        setSearchData(searchTable);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(searchVal);
  };
  return (
    <div>
      <Logout></Logout>
      <form onSubmit={OnsubmitHandler.bind(this)}>
        <label>Enter Your Search</label>
        <input ref={SearchInputRef} />
        <button type="submit">Search</button>
      </form>
      <SearchTable searchData={searchData}></SearchTable>
    </div>
  );
};

export default Search;
