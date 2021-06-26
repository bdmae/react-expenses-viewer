// a component in react, is just a javascript function
// you need to tell react that the css file exists for this component
import './ExpenseItem.css';

//because the date is an object, we need
  //to convert it to a string or itll break everything
  //we do that later via .toISOString
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // we don't need these const variables defined anymore inside of the expense item func because we're using props
  // so we get all the data we need from outside this component

//to use 'props', you must have it defined in your attributes.
// for example in App.js, it is defined as title={expenses[0].title}

function ExpenseItem(props) {
  //if we have complicated long code it's better practice to put it in a variable at the top
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  const year = props.date.getFullYear();
  //getFullYear(); is another built in method which extracts date as a 4-digit number

  return (
    <div className="expense-item">
     <div>
       <div>{month}</div>
       <div>{day}</div>
       <div>{year}</div>
     </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}


// to use this component, we need to export it out
// of the file otherwise it can only be used inside
// the file

export default ExpenseItem;
