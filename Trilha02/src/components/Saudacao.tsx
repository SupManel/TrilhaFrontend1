import { useState } from "react";

interface SaudacaoProps {
  nomeInicial: string;
}

export const Saudacao = ({ nomeInicial }: SaudacaoProps) => {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um novo nome"
      />
    </div>
  );
};
