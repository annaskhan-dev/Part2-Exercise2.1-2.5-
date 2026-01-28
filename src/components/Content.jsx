import Part from './Part'

const Content = (props) => (
  <div>
    {props.parts.map((part, index) =>
      <Part key={part.id} part={part} />
    )}
  </div>
)

export default Content
