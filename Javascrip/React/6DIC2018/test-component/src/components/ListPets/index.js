import React,{Component} from 'react';

class ListPets extends Component{

   async componentDidMount(){
        const dataInfo= await fetch('https://react-test-22eeb.firebaseio.com/pets.json').then((info)=>{
            return info.json();
        }).then((data)=>{
            this.setState({
                pets:Object.entries(data)
            });
        });
        console.log(dataInfo);
    }

    render(){
        const datos=this.props.data;
        console.log("datos",datos);
        return(
            <div>
        <h1>Mascotas Registradas</h1>
        <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"># ingreso</th>
                        <th scope="col">Nombre Mascota</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Dueño</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
        <tbody>
        {this.props.data.map((pet,index) => (
            
                <tr key={index+pet} id={pet[0]}>
                    <th scope="row">{index+1}</th>
                    <td>{pet[1].name}</td>
                    <td>{pet[1].breed}</td>
                    <td>{pet[1].owner}</td>
                    <td>{pet[1].checkIn}</td>
                    <td><button  className="delButton" onClick={this.deleteEntry}>X</button></td>
                </tr>
                )
        )}
        </tbody>
        </table>
                        <div id="exampleModalLong" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        );
    }
}

export default ListPets