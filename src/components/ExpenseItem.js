// a component in react, is just a javascript function
// you need to tell react that the css file exists for this component
import './ExpenseItem.css';

function ExpenseItem(props) {
  //because the date is an object, we need
  //to convert it to a string or itll break everything
  //we do that later via .toISOString
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // we don't need these const variables defined anymore because we're using props
  // so we get all the data we need from outside this component

//to use 'props', you must have it defined in your attributes.
// for example in App.js, it is defined as title={expenses[0].title}
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
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
