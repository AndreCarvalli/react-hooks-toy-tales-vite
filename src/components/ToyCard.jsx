import React from "react";

function ToyCard({toy, setToys}) {

function handleDelete(){
  fetch(`http://localhost:4000/toys/${toy.id}`, {
    method:"DELETE",
  })
  .then(res => {
    if(res.ok){
       setToys(prevToys =>
                prevToys.filter((t) => String(t.id) !== String(toy.id))
            );
    }else{
      console.log("Error deleting the item"); 
    }
  })
}

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
