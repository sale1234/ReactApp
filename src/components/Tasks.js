const Tasks = ({ tasks }) => {
  return (
    <>
      {/* You are creating a list*/}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
