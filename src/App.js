import './index.css'; 
import './App.css';
import Header from './components/Header';
import BoardHeader from './components/BoardHeader';
import PostForm from './components/PostForm';
import {UserIcon } from '@heroicons/react/outline'

function App() {
  return (
    <>     
      
      <Header />  
      <BoardHeader /> 
      <PostForm />
      <div className="px-6 bg-reddit_dark text-reddit_text">
      <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
        <h5 className="text-reddit_text-darker text-sm mb-2">Posted by u/helloimdeadinside
            9 hours ago</h5>
        <h2 className="text-xl mb-4">Do people within dev teams ever use different frameworks than the other employees?</h2>
        <div className="text-sm leading-6">
        <p>I’m asking because currently I’m learning React and I’m not sure if I like it very much. I’ve heard Vue might be a better fit for some people. However, most job postings in my area seem to be looking for react developers but I’ve seen some mention “react or equivalent framework”. Does this mean some teams use multiple frameworks?
        <UserIcon />
        </p>
      
        </div>
        </div>
      </div>
    </> 
  );
}

export default App;
