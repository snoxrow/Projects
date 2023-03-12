const Time = ({id, index, text,onClick, focused}) => {
  return (
  <div id={id} style={{color: focused ? "#fff" : "hsl(235, 45%, 61%)" }}   onClick= {onClick} className="time-option" tabIndex={index}>{text}</div>
  )
}
export default Time