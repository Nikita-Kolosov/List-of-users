import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <UserList />
      </div>
      <div className='ref'>Developed: Nikita Kolosov<br />Designed: Dmitriy Shilin</div>
    </div>
  );
}

export default App;
