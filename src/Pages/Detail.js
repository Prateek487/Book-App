import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error from "./Error";

const Detail = () => {
  const [bookData, setBookData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        if (!result) {
          console.log("error");
        }
        const resData = await result.json();
        setBookData(resData);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [setBookData]);

  return (
    <div>
      {bookData.error ? (
        <Error err={bookData}></Error>
      ) : (
        // bookData.key.map((item) => {
        //   <div>{item}</div>;
        // })
        <div>
          Book Data cannot be displayed as the api is not working. It can be
          easily Implemented similar to the searh table. I have not Implemented
          logic for displying the book details as i cannot test it. There is One
          way to Implement this by using volume search api but i haven't done
          that.
        </div>
      )}
    </div>
  );
};

export default Detail;
