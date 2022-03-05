
import './App.css';
import React, {useState} from 'react'; // uso esta libreria para guardar mis variales y cambios de estado


function App() {

  const [number1,setNumber1]= useState(""); // number1 se inicializa como string y ahi se guarda el primer num. ingresado
  const [number2,setNumber2]= useState(""); // number2 se inicializa como string y ahi se guarda el segundo num. ingresao
  const [resultado,setResultado]= useState(0); // resultado se inicializa en cero y ahi seguarda el valor de la operacion entre num1 y num2
  const [operation,setOperation]=useState(""); // se inicializa como string y segun el signo ingresado ,ejecuta una operacin matematica

function clickNumber(val){
  if(operation === ""){        // si la operacion es igual a null , ingresamos el primer num.
    setNumber1(number1 + val);

  }else{

    setNumber2(number2 + val) // sino ingresamos el segundo num.
  }
  
}

function clickOperation(val){
  setOperation(val);

}

function getResult(){

  switch(operation){

    case "+":
      setResultado(Number(number1)+ Number(number2));
      break;

    case "-":
      setResultado(Number(number1)- Number(number2));
      break;
    case "/":
      setResultado(Number(number1)/ Number(number2));
      break;

   case "*":
    setResultado(Number(number1)* Number(number2));
    break;

  }
}

function allClear(){

  setNumber1("");
  setNumber2("");
  setResultado(0);
  setOperation("");

}
  return (

    <div className="App">

      <div className='Calculator-grid'>

        <div className='output'>

          <div className='previous-opered'>{operation ? number1 + operation : ""}</div> 
          <div className='current-opered' >{resultado ? resultado : (!operation ? number1 : number2)}</div> 

        </div>
        <button  onClick={allClear} className='span-two'>AC</button>
        
        <button onClick={allClear}>Del</button>
        <button onClick ={ ()=> {clickOperation("/")}}>/</button>
        <button onClick ={() => {clickNumber(7)}} >7</button>
        <button onClick ={() => {clickNumber(8)}}>8</button>
        <button onClick={() => {clickNumber(9)}} >9</button>
        <button onClick={ ()=> {clickOperation("*")}} >*</button>
        <button onClick={() => {clickNumber(6)}} >6</button>
        <button onClick={() => {clickNumber(5)}}  >5</button>
        <button onClick={() => {clickNumber(4)}} >4</button>
        <button onClick={ ()=> {clickOperation("+")}} >+</button>
        <button onClick={() => {clickNumber(3)}}  >3</button>
        <button onClick ={() => {clickNumber(2)}}>2</button>
        <button onClick ={() => {clickNumber(1)}}>1</button>
        <button onClick ={ ()=> {clickOperation("-")}}>-</button>
        <button onClick ={ ()=> {clickNumber(".")}}>.</button>
        <button onClick ={() => {clickNumber(0)}}>0</button>

        <button onClick={getResult}className='span-two'>=</button>

      </div>

    
    
      
    </div>
  );
}

export default App;
