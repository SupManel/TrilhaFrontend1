import { Contador } from "./components/Contador";
import { Saudacao } from "./components/Saudacao";
import { ListaTarefas } from "./components/ListaTarefas";
import { ControleVisibilidade } from "./components/ControleVisibilidade";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Exercícios React + TS</h1>
      <Contador valorInicial={5} />
      <hr />
      <Saudacao nomeInicial="Paulo" />
      <hr />
      <ListaTarefas tarefasIniciais={["Estudar", "Comer", "Dormir"]} />
      <hr />
      <ControleVisibilidade texto="Descobriu um segredo" />
    </div>
  );
}

export default App;
