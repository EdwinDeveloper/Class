import React, { Component}  from 'react';

import './App.css';

const Logout = (props) =>{
    return <h1>Por favor inicia sesion</h1>
}

const Login = (props) =>{
    return <h1>Bienvenido</h1>
}

class App extends Component {

    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render(){
      return
    }

  // constructor(props){
  //   super(props);
  //   this.state={
  //     'isLoggedIn':true
  //   }
  //   this.cambiarState=this.cambiarState.bind(this);
  // }
  cambiarState(){
      /*this.setState rerenderiza render(ejecuta de nuevo)*/
      this.setState({
        isLoggedIn:!this.state.isLoggedIn
      });    
  // }
  // render(){
  //   // let component;
  //   // let { isLoggedIn }= this.state;
  //   // if(isLoggedIn){
  //   //   component = <Logout></Logout>
  //   // }else{
  //   //   component = <Login></Login>
  //   // }
  //   let { isLoggedIn }=this.state;
  //   let message = `${isLoggedIn  ? 'Cierra Session':'Inicia Sesion' }`;
  //   let btnClas = `${isLoggedIn  ? 'btnlogin':'btnLogout'}`;

  //   return(
  //     <div className='App'>
  //       <button onClick={this.cambiarState}>Cambiar la sesion</button>
  //       <h1 className={`${btnClas}`}>{message}</h1>
  //   </div>
  //   )
  // }
  // constructor(props){
  //     super(props);
  //     this.render()
  //     this.state={
  //       clicks:0
  //     }
  //     // this.handleClick = this.handleClick.bind(this)

      
  // }

  // // handleClick(){
  // //   this.setState({
  // //     clicks: this.state.clicks + 1
  // //   });
  // // }
 
  
  // render() {
  //   return (
  //     <div className="App">
  //         <Chronometer counter={15}></Chronometer>
  //         <Chronometer counter={65}></Chronometer>
  //         <Chronometer counter={25}></Chronometer>
  //         <Chronometer counter={-1000}></Chronometer>
  //         <Chronometer counter={-100}></Chronometer>
  //         {/* <button onClick={this.handleClick}>Click me </button> */}
  //         {/* <h1>Clicks: {this.state.clicks}</h1> */}
  //      </div>
  //    );
  //   }
}

export default App;
