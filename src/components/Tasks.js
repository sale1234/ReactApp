import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* You are creating a list*/}
      {tasks.map((task) => (
        <Task
          onDelete={onDelete}
          key={task.id}
          onToggle={onToggle}
          task={task}
        />
      ))}
    </>
  )
}

export default Tasks
