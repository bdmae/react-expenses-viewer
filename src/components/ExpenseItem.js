// a component in react, is just a javascript function
// you need to tell react that the css file exists for this component


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
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// we used "./" when we're looking for a file in the same folder.
import './ExpenseItem.css';



function ExpenseItem(props) {
  //if we have complicated long code it's better practice to put it in a variable at the top
  // if there is no content between the component tag, you can just do <ExpenseDate />

  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}


// to use this component, we need to export it out
// of the file otherwise it can only be used inside
// the file

export default ExpenseItem;
