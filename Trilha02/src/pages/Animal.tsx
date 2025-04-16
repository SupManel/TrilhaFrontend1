import { useParams } from "react-router-dom";

const Animal = () => {
  const { name } = useParams();

  return <h1>Animal: {name}</h1>;
};

export default Animal;
