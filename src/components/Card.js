import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

// props.children -> the value of 'children' will always be the CONTENT between the opening and closing tags of your custom component
// so between the
// this component acts as a shell around either our expense item or expenses content


export default Card;
