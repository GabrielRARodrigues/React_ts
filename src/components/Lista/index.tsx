import Item from './Item'
import style from './Lista.module.scss'

import { ITarefa } from '../../types/tarefa'

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item {...tarefa} key={index} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
