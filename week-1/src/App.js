import logo from './logo.svg';
import React from 'react'; 
import './App.css';

function App() {
  const styles = {
    border: "1px solid gray",
    padding: "20px",
    width: "200px",
    margin: "30px auto",
  };
  return (

    <div id="id" className="App">
        <div style={styles}>
        <h1 style={{color: "green"}}>안녕하세요!</h1>
        <hr/>
        <p style={{textAlign: "left"}}>이름을 입력해 주세요.</p>
       <input type="text" />

        </div>
      {/* <p style={{color : "green", fontSize: "30px", fontWeight: "bold"}}>안녕하세요!</p>
      <p style={{fontSize: "15px"}}>이름을 입력해 주세요.</p>
      <input style={{width: "300px"}} type="text" /> */}
    
    </div>
  );
}

export default App;
