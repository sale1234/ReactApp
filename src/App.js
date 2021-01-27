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

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} tasks={tasks} onToggle={toggleReminder} />
      ) : (
        'Task list is empty'
      )}
    </div>
  )
}

export default App
