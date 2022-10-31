import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const getPokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    setData(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="flex flex-col">
      {data.map((pokemon) => (
        <Link to={`/pokemon?url=${pokemon.url}`}>{pokemon.name}</Link>
      ))}
    </div>
  );
}

export default Home;
