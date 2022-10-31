import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Pokemon() {
  const [data, setData] = useState([]);
  const query = useQuery();

  const getPokemon = async () => {
    const { data } = await axios.get(query.get("url"));
    setData(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex flex-col justify-center align-middle items-center">
      <p>{data.name}</p>
      <img src={data.sprites.front_default} />
    </div>
  );
}

export default Pokemon;
