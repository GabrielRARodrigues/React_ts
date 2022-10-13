import Cronometro from '../components/Cronometro'
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import style from './App.module.scss'
import { useState } from 'react'
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  )
}

export default App
