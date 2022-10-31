import { useParams } from "react-router-dom";

function Name() {
  const { name } = useParams();
  return (
    <div className="flex w-full h-full justify-center items-center align-middle">
      Vous avez cliqué sur le nom : {name}
    </div>
  );
}

export default Name;
