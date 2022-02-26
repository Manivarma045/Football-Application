import logo from './logo.svg';
import './App.css';
import Totalamount from './Totalamount';
import Remaining from './Remaining';
import Expenses from './Expenses';
import AddExpense from './Addexpense';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
     <div>
      
       <Header />
       
       <Content />
       <Footer />
     </div>
  );
}

export default App; 

/*const App = () =>{
  return(
    <div className="tracker-body">
      <h1 className="tracker-heading">Budjet Tracker</h1>
      <div className="Total-amount">
        <Totalamount />
      </div>
      <div className='remaining'>
        <Remaining />

      </div>
      <div className='Expenses'>
        <h1>Expenses</h1>
        <Expenses />
        
      </div>
      <div className='Add-expenses'>
        <AddExpense />
        
      </div>
      
    </div>
  )
}


export default App; */
