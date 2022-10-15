import Item from './Item'
import style from './Lista.module.scss'

import { ITarefa } from '../../types/tarefa'
interface Props {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item {...tarefa} 
            selecionaTarefa={selecionaTarefa}
          key={tarefa.id} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
