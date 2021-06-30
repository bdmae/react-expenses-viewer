import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';


function Expenses(props) {
  return (
   <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
       <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
       <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
       <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

// import ExpenseItem from "./ExpenseItem";

// other solutions
// function Expenses(props) {
//   return (
//     <>
//       {props.content.map((item) => (
//         <ExpenseItem
//           id={item.id}
//           title={item.title}
//           amount={item.amount}
//           date={item.date}
//         />
//       ))}
//     </>
//   )
// }

// import Item from "./Item";
// import "./ListItem.css";

// const ListItem = (props) => {
//   return (
//     <div className="expenses">
//       {props.items.map((item) => (
//         <Item title={item.title} date={item.date} price={item.amount} />
//       ))}
//     </div>
//   );
// };





export default Expenses;


