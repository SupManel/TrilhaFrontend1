import { useState } from "react";
import axios from "axios";

const CriarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrar = async () => {
    setMensagem("");

    // Validação básica de e-mail
    if (!nome.trim() || !email.includes("@")) {
      setMensagem("Preencha um nome válido e um e-mail com '@'.");
      return;
    }

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: nome,
          email: email,
        }
      );

      if (res.status === 201) {
        setMensagem("Usuário cadastrado com sucesso!");
      } else {
        setMensagem("Erro ao cadastrar.");
      }
    } catch {
      setMensagem("Erro ao cadastrar.");
    }
  };

  return (
    <div>
      <h1>Criar Novo Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CriarUsuario;
