import React, { useState } from "react";
import  {getAllData} from "./api";

const ReviewTable = async () => {
  const [reviews, setReviews] = useState([
  //   { id: 1, title: "Review 1", content: "Content 1", datetime: "2023-07-12 10:00:00" },
  //   { id: 2, title: "Review 2", content: "Content 2", datetime: "2023-07-11 15:30:00" },
  //   { id: 3, title: "Review 3", content: "Content 3", datetime: "2023-07-10 09:45:00" }
  ]);
  
  const data = await getAllData()

  const deleteReview = (reviewId) => {
    setReviews(data.filter((review) => review.id !== reviewId));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date-time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}> {''}
              <td>{review.id}</td> {''}
              <td>{review.title}</td> {''}
              <td>{review.content}</td> {''}
              <td>{review.datetime}</td>
              <td>
                <button>Edit</button> {''}
              </td>
              <td>
                <button onClick={() => deleteReview(review.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{''}
      <div>
        <button>Save</button> {''}
        <button>Reset</button> {''}
        <button>Cancel</button>
      </div>
    </>
  );
};

export default ReviewTable;
