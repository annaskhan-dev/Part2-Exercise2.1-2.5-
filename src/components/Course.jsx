import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  const parts = props.course.parts

  // total using reduce
  const total = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part)
    return sum + part.exercises
  }, 0)

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}

export default Course
