import React from 'react'
import style from './Lista.module.scss'

function Lista() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'Typescript',
      tempo: '03:00:00'
    }
  ]
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li className={style.item} key={index}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista
