import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const CardDetails = () => {
  const [page, setPage] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPage = async () => {
      for (let i = 1; i < 11; i++) {
        const res = await axios.get(
          `https://api.pokemontcg.io/v2/cards?page=${i}&pageSize=10`
        );
        setPage(res.data.page);
      }
    };
    fetchPage();
  }, [page]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`
      );
      setData(res.data.data);
    };

    fetchPosts();
  }, [page]);
  console.log(data);
  console.log(page);
  return (
    <div className="card-container">
      {data.map((data, idx) => (
        <Card data={data} key={idx} />
      ))}
    </div>
  );
};

export default CardDetails;
