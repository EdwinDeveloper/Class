import React,{Component} from 'react';
import './cronometer.css';

class Chronometer extends Component{
    constructor(props){
        let { counter }=this.props
        super(props);
        this.state= {
            counter:counter
        }
    }

    componentDidMount(){/*Ejecuta cuando se termina de renderizar en el dom*/
        this.chronometer= setInterval(()=>{
            this.increase();
        },1000);
    }


    componentWillUnMount(){/*Se ejecuta despues que el componente se destruye del com*/
        console.log("Adios");
        clearInterval(this.chronometer);
    }

    increase(){
        this.setState({
            counter:this.state.counter+1
            
        });
    }

    render(){
        return(
            <h1>Chronometer: {this.state.counter}</h1>
        )
    }
}

export default Chronometer;