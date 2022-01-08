import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const CardDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://api.pokemontcg.io/v2/cards?page=1&pageSize=10"
      );
      setData(res.data.data);
    };
    fetchPosts();
  }, []);
  console.log(data);
  return (
    <div className="card-container">
      {data.map((data, idx) => (
        <Card data={data} key={idx} />
      ))}
    </div>
  );
};

export default CardDetails;
