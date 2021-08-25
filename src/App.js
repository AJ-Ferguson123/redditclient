import './index.css'; 
import './App.css';
import Header from './components/Header';
import BoardHeader from './components/BoardHeader';
import PostForm from './components/PostForm';

function App() {
  return (
    <>      
      <Header />  
      <BoardHeader /> 
      <PostForm />
      <div className="border border-reddit_border bg-reddit_dark-brighter">

      </div>
    </> 
  );
}

export default App;
