import './index.css'; 
import './App.css';
import Header from './components/Header';
import BoardHeader from './components/BoardHeader';
import Logo from '../src/images/logo10.png'

function App() {
  return (
    <div className="App">      
      <Header />  
      <BoardHeader /> 
      <div className="bg-reddit_dark py-4 px-6 text-gray-400">
        <div className="border border-reddit_border p-2 rounded-md">
          <div className="rounded-full bg-gray-500 overflow-hidden w-8 h-8">
            <img src={Logo} alt="" className="h-8 w-8"></img>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
