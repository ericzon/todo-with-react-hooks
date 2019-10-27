import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import TodoMain from './components/todo-main';
import TodoService from './services/todo.service';

const todoService = new TodoService();

const useAsyncHook = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setLoader] = useState(true);
  
  useEffect(() => {
    async function getContent() {
      try {
        console.log('getContent > init');
        const content = await todoService.getItems();
        console.log('getContent > setContent', content);
        setContent(content);
        setLoader(false);
      } catch(error) {
        console.error('catching error: ', error);
      }
    }

    getContent();
  }, [1]);

  return [isLoading, content];
}

function App() {
  const [isLoading, content] = useAsyncHook();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main-section">
        {isLoading ? 
          <div>Loading...</div> :
          <TodoMain content={content} />}
      </section>
      
    </div>
  );
}

export default App;
