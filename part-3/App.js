const App = () => (
    <div>
      <Person name={'Roger'} age={33} hobbies={['karate', 'coding', 'video games']} />
      <Person name={'Nicole'} age={28} hobbies={['pottery', 'napping', 'reading']} />
      <Person name={'Jim'} age={12} hobbies={['tv', 'video games', 'reading']} />
    </div>
)
  
  
  
ReactDOM.render(<App />, document.getElementById("root"))