import { useState } from "react";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

export const ListaTarefas = ({ tarefasIniciais }: ListaTarefasProps) => {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, i) => (
          <li key={i}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};
