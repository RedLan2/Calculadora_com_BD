
import { Calculadora, Container, Linha,historico } from "./styles"; 
import axios from 'axios';
import Button  from "./components/button";
import Input from './components/input'
import { useEffect, useState } from "react";
const App=()=> {
    const [currentNumber, setCurrentNumber]=useState(0);
    const[firstNumber, setFirstNumber]=useState('0');
    const[operation,setOperation]=useState('');
    const [historico, setHistorico] = useState([]);

    const handleAddNumber=(number)=>{
        setCurrentNumber(prev =>`${prev === '0'? '': prev}${number}`)
    }

    const limparTela=()=>{
        setCurrentNumber('0')
        setFirstNumber('0')
    }

    const somaNumeros=()=>{
        if(firstNumber==='0'){
            setFirstNumber(currentNumber);
            setCurrentNumber('0')
            setOperation('+')
        }else{
            const sun=Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sun))
        }
    
    }
    const subtrairNumeros=()=>{
        if(firstNumber==='0'){
            setFirstNumber(currentNumber);
            setCurrentNumber('0')
            setOperation('-')
        }else{
            const sun=Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sun))
        }
    }

        const multiplicarNumeros=()=>{
            if(firstNumber==='0'){
                setFirstNumber(currentNumber);
                setCurrentNumber('0')
                setOperation('x')
            }else{
                const sun=Number(firstNumber) * Number(currentNumber);
                setCurrentNumber(String(sun))
            }
        }

        const divisao=()=>{
            if(firstNumber==='0'){
                setFirstNumber(currentNumber);
                setCurrentNumber('0')
                setOperation('/')
            }else{
                const sun=Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(sun))
            }
        }
    
    

  const Igual = () => {
  if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
    let resultadoFinal = '';
    let expressao = `${firstNumber} ${operation} ${currentNumber}`
    buscarHistorico();

    switch (operation) {
      case '+':
        resultadoFinal = String(Number(firstNumber) + Number(currentNumber));
        break;
      case '-':
        resultadoFinal = String(Number(firstNumber) - Number(currentNumber));
        break;
      case 'x':
        resultadoFinal = String(Number(firstNumber) * Number(currentNumber));
        break;
      case '/':
        resultadoFinal = String(Number(firstNumber) / Number(currentNumber));
        break;
      default:
        return;
    }

    setCurrentNumber(resultadoFinal);
    setFirstNumber('0');
    setOperation('');

    // ✅ Envia para o back-end
    enviarOperacao(expressao, resultadoFinal).then(() => {
      buscarHistorico();
    });
  }
};

const enviarOperacao = async (expressao, resultado) => {
  try {
    const response = await axios.post("http://localhost:5160/api/Operacao", {
      expressao,
      resultado
      
    });

    console.log("Operação salva:", response.data);
  } catch (error) {
    console.error("Erro ao salvar operação:", error);
  }
};

const buscarHistorico = async () => {
  try {
    const response = await axios.get("http://localhost:5160/api/Operacao");
    setHistorico(response.data);
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
  }
};
const deletarOperacao = async (id) => {
  try {
    await axios.delete(`http://localhost:5160/api/Operacao?id=${id}`);
    buscarHistorico();
  } catch (error) {
    console.error("Erro ao deletar operação:", error);
  }
};

  useEffect(() => {
    buscarHistorico();
  }, []);

  return (
    <Container>
      <Calculadora>
    
      <Input  value={currentNumber}/>
      <Linha>
              <Button label="0"onClick={()=>handleAddNumber('0')}/>
              <Button label='/'onClick={divisao}/>
              <Button label='C' onClick={limparTela}/>
              <Button label="x" onClick={multiplicarNumeros}/>
          </Linha>
          <Linha>
              <Button label="1"onClick={()=>handleAddNumber('1')}/>
              <Button label='2'onClick={()=>handleAddNumber('2')}/>
              <Button label='3'onClick={()=>handleAddNumber('3')}/>
              <Button label="+"onClick={somaNumeros}/>
          </Linha>
          <Linha>
              <Button label="4"onClick={()=>handleAddNumber('4')}/>
              <Button label='5'onClick={()=>handleAddNumber('5')}/>
              <Button label='6'onClick={()=>handleAddNumber('6')}/>
              <Button label="-"onClick={subtrairNumeros}/>
          </Linha>
          <Linha>
          <Button label="7"onClick={()=>handleAddNumber('7')}/>
              <Button label='8'onClick={()=>handleAddNumber('8')}/>
              <Button label='9' onClick={()=>handleAddNumber('9')}/>
              <Button label="=" onClick={Igual} />
          </Linha>
      </Calculadora>
       {/* Histórico abaixo */}
      <historico style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px"}}>
    <h2>Histórico</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {historico.map((op) => (
        <li key={op.id}>
          <span>{op.expressao} = {op.resultado}</span>
          <button onClick={() => deletarOperacao(op.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>Deletar</button>
        </li>
      ))}
    </ul>
  </historico>
      </Container>
  );
}


export default App;
