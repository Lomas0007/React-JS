function App(props) {
  var num1= parseInt(props.n1);
  var num2= parseInt(props.n2);
  return (
    <div className="App">
      <h2>{props.children}</h2>
      No1= {num1} <br/>
      No2= {num2} <br/>
      Sum = {num1+num2} <br/>
    </div>
  )
}

App.defaulProps={
  n2: 90,
}

export default App;