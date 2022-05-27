import logo from './logo.svg';
import React from "react";
import Nemo from './nemo';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 3,

    };
  }
  componentDidMount(){}
  
  addNemo = () => {
    this.setState({count: this.state.count +1}); //setState는 state를 바꿔준다
  }

  removeNemo = () => {
    if(this.state.count > 0) {
      this.setState({count: this.state.count -1});
    } else {
      window.alert("네모가 없어요")
    }
  }

  render() {
    
    
    
    return (
      <div className='App'>
        <Nemo />

      </div>
    );
  }
}

export default App;
