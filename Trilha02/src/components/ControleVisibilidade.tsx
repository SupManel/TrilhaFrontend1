import { useState } from "react";

interface ControleVisibilidadeProps {
  texto: string;
}

export const ControleVisibilidade = ({ texto }: ControleVisibilidadeProps) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};
