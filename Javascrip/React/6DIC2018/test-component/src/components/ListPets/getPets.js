import React,{Component} from 'react'
import ListPets from '../ListPets';

class getPets extends Component{
    constructor(props){
        super(props);
        this.state={
            pets:[]
        }
    }

    componentDidMount(){
        const dataInfo= fetch('https://react-test-22eeb.firebaseio.com/pets.json').then((info)=>{
            return info.json();
        }).then((data)=>{
            this.setState({
                pets:Object.entries(data)
            });
        });

        console.log(dataInfo);
    }
    render(){
        return(
            <div>
            <h1>HOLA</h1>
                <ListPets data={this.state.pets}/>
            </div>
        );
    }
}

export default getPets;