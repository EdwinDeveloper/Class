import React,{Component} from 'react';

class FormPets extends Component{
    constructor(props){
        super(props);
    }
    handleForm(){
        const name=document.getElementsByClassName('name')[0].value;
        const breed=document.getElementsByClassName('breed')[0].value;
        const owner=document.getElementsByClassName('owner')[0].value;
        const checkin=document.getElementsByClassName('checkIn')[0].value;
        const symptoms=document.getElementsByClassName('symptoms')[0].value;
        const dataFinal={
            name,breed,owner,checkin,symptoms
        }

    }
    render(){
        return(
            <form>
                <div className='titulo'>Pets Form</div>
                    <div className='principal'>
                        <div className='contenedor'>
                            <label className='label'>Nombre de la Mascota: </label>
                            <input className='input name' placeholder='Ingresa el nombre'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Raza: </label>
                            <input className='input breed' placeholder='Ingresa la raza'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Dueño: </label>
                            <input className='input owner' placeholder='Ingresa nombre del dueño'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Fecha de Ingreso: </label>
                            <input className='input checkIn' type='date' placeholder='Ingresa fecha de ingreso'></input>
                        </div>
                        <div className='contenedor'>
                            <label className='label'>Síntomas: </label>
                            <input className='input symptoms' placeholder='Ingresa los síntomas'></input>
                        </div>
                        <div className='contenedor'><button className='boton' type='submit' onClick={this.handleForm}>Guardar</button></div>
                    </div>
                
            </form>
        );
    }
}

export default FormPets;