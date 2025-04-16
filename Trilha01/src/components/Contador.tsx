import { useState } from "react";

interface ContadorProps {
  valorInicial: number;
}

export const Contador = ({ valorInicial }: ContadorProps) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
};
