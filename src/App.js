import './App.css';
import Name from './componentes/Name';
import Relogio from './componentes/Relogio';
import Title from './componentes/Title';
import Subtitle from './componentes/Subtitle';
import Upppercase from './componentes/Uppercase';
import LowerCase from './componentes/LoweCase';
import Card from './componentes/Card';
import List from './componentes/Lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card/>
        <List/>
        <h1>Hello Word </h1>
       <Name/>
       <Title texto = "Marcinha"/>
       <Title texto = "Grazi"/>
       <Title texto = "Sâmara"/>
       <Title texto = "Carol"/>
       <Subtitle>Post</Subtitle>
       <Subtitle>Seguindo</Subtitle>
       <Subtitle>Seguidores</Subtitle>
       <Upppercase recebido="marcia"/>
       <LowerCase name="MARCIA"/>
       <Relogio/>
      </header>
    </div>
  );
}

export default App;
