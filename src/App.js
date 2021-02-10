
import { useState} from 'react';
import './App.css';
import {Numbers} from './Api/Number.json';
import Botones from './componente/Botones';
import Container from './contenedor/Container';
import Calculadora from './contenedor/Calculadora';
import Result from './contenedor/Result';



function App() {
   const [num, setNum] = useState('');
   const handleAdd = (e) =>{
     let id = e.target.id
     if(id === '='){
        let result = eval(num)
        setNum(result)
        setNum(result.toString())
     }
     else if(id==='C'){
        //elimina un solo numero
        setNum(num.slice(0,num.length -1))
     }
     else if(id==='CE'){
        //resetea la pantalla
        setNum('')
     }
     else{
      setNum(num.concat(id))
     }   
   }
   console.log(num)

   function handleChange(e) {
      setNum(e.target.id);      
   }
   return (
      <div className="App">
         <Container>
            <Calculadora>
               <Result handleChange={handleChange} 
                       num={num}/>   
               {Numbers.map((boton)=>(
                  <Botones className={boton.className}
                           id={boton.id} 
                           key={boton.id}                           
                           value={boton.value}
                           handleAdd={handleAdd}                 
                           />
               ))}     
            </Calculadora>
         </Container>     
      </div>
   );
}

export default App;
