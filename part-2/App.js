const App = () => (
    <div>
      <Tweet username={'Rawgher'} name={'Roger P'} date={'Sep 11, 2024'} message={'Hello all'} />
      <Tweet username={'NLin'} name={'Nicole L'} date={'Sep 11, 2024'} message={'This is my message'} />
      <Tweet username={'asdfas'} name={'Unknown'} date={'Sep 11, 2024'} message={'asdfasfasdfdasfdasdfasd'} />
    </div>
)
  
  
  
ReactDOM.render(<App />, document.getElementById("root"))
  