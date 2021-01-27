import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {/* You are creating a list*/}
      {tasks.map((task) => (
        <Task onDelete={onDelete} key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
