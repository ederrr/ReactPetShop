import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {buscaID} from '../service/acesso.api.js';
import {buscaUsuario} from '../service/acesso.api.js';
import {buscaPet} from '../service/acesso.api.js';


class ListPets extends Component{

	constructor(props){

		super(props)

		this.state = {
			pets:[]
		}

	}
	componentDidMount(){
		var temp =[]
		buscaUsuario("usuario", this.props.id).then(
			(res) => {
				res.pets.map( (id) => {
					buscaPet("pet", id).then((p) => {
						temp = [...temp,p]
						this.setState({pets: temp})
					})
				})
			})
	}
	render(){
		return(
			<div className="row w-100 mx-auto">
				<p className="col col-12 h4 my-3">Meus pets:</p>
				{this.state.pets.map( (pet) =>
					<div key={pet.id} className=" col col-lg-2 col-sm-5 pets shadow rounded text-center p-3 mx-1">
						<Link to={`/Pet${pet._id}`}>
						<img className="img-fluid " src={require(`../assets/fotos/${pet.foto}`)} alt="foto do pet" />
						</Link>
						<div className="container">
							<p className="product mt-3 mb-2"><span className="fa fa-edit text-primary"></span>{pet.nome}<span className="fa fa-trash text-danger"></span></p>
						</div>
					</div>
				)}
				<Link to={"/CadastroPet"} className=" col col-lg-2 col-sm-5 pets shadow rounded text-center p-3 mx-1">
					<img className="img-fluid " src={require(`../assets/fotos/plus.png`)} alt="Adicionar pet" />
					<div className="container">
						<p className="h6 text-success mt-3 mb-2">Adicionar Pet</p>
					</div>
				</Link>
			</div>
		);
	}
}

export default ListPets;
