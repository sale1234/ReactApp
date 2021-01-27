const tasks = [
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
]

const Tasks = () => {
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
