import React,{useContext,useState} from 'react';
import ThemeContext from './themeContext';
import ThemeToggle from './themeToggle'
interface todoType{
  title:string;
}
function App() {
  const [theme,setTheme]=useState<boolean>(false);
  const [text,setText]=useState<string>("");
  const [todo,setTodo]=useState<todoType[]>([]);
  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={theme?"bg-dark":"bg"}>
        <div className="container">
        <input onChange={(e)=>{
            setText(e.target.value);
        }} value={text} className="input"/>
        <button onClick={()=>{
          setTodo([...todo,{title:text}]);
          setText("")
        }} className="btn">Add</button>
        <div className="todo">
        {todo.map((temp)=>(
          <div className="content">{temp.title}</div>
        ))}
        </div>
        
      </div>
      <ThemeToggle/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
