import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    // console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} tasks={tasks} onToggle={toggleReminder} />
      ) : (
        'Task list is empty'
      )}
    </div>
  )
}

export default App
