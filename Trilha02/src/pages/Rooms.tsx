import { Link } from "react-router-dom";

const Rooms = () => {
  const rooms = [
    { id: 1, name: "Suíte Luxo" },
    { id: 2, name: "Quarto Simples" },
    { id: 3, name: "Cobertura" },
  ];

  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
