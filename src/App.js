import './App.css';
import MainCard from './components/maincard';

function App() {
  return (
    <div className='all'>
    <MainCard title="Player" number="56" img="card__image"/>
    <MainCard title="Team" number="13" img="card__team"/>
    <MainCard title="Staff" number="38" img="card__staff"/>
    </div>
  );
}

export default App;
