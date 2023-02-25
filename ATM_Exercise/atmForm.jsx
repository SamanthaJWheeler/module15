const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

const Account = () => {
 const [accountState, setAccountState] = React.useState(0); 
 const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState = Number(event.target.value);
  };
  const handleSubmit = () => {
    alert(`Account total= ${accountState}`);
    Event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));