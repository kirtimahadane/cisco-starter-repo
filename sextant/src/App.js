
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';

function App() {
  return (
    <>
    <Banner/>
    <Card>

      <p className='lead'>Prioratized Tasks</p>
      <div className='info'>
      <h4>83%</h4>
      <p>Av. Completed</p>
      </div>
      
    </Card>
    </>
      
  );
}

export default App;
