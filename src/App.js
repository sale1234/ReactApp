import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Odlazak u teretanu',
      day: 'Petak u 14:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Prosetati psa',
      day: 'Ponedeljak u 10:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Ciscenje sobe',
      day: 'Subota u 09:00am',
      reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks onDelete={deleteTask} tasks={tasks} />
    </div>
  )
}

export default App
