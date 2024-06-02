import PropTypes from 'prop-types'
import "./Square.css"


const Square = ({squareValue, handleClick}) => {

  let style 
  if(squareValue === null){
    style = ''
  }else if (squareValue === "X"){
    style = 'red'
  } else {
    style = 'blue'
  }
  
  return (
    <button className={`${style}`} onClick={handleClick} >{squareValue}</button>
  )
}

Square.propTypes = {
  squareValue: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}
export default Square