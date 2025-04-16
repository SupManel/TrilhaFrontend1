import { useParams, useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const reservar = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Detalhes do Quarto {id}</h1>
      <button onClick={reservar}>Reservar</button>
    </div>
  );
};

export default RoomDetails;
