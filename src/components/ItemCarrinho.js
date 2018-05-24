import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class ItemCarrinho extends Component{

	constructor(props) {
		super(props);
		this.state = {value: '1'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({value: event.target.value});
	}

	render(){
		return(

				<div className="row my-1 border w-100 mx-4 produto"  >
					
						<span className="col col-3 w-100 text-center ">
							
							<Link to= {`/Produto${this.props.produto.id}`}>
							<img className="img-fluid w-50 my-2" src={require(`../assets/fotos/${this.props.produto.imagem}`)} alt="foto do produto" />
							</Link>
							<div className="descricao">

							</div>
						</span>
						<span className="col col-3 w-100 text-center text-dark my-auto" >
							<p className="nome text" >{this.props.produto.nome}</p>
							<p className="valor text"> {this.props.produto.preco}</p>
						</span>
						<span className="col col-3 w-100 text-center text-dark my-auto">
							<p>Quantidade</p>
							<input className="input w-25" value={this.state.value} onChange={this.handleChange} type="number" name="qtd" />
						</span>
						<span className="col col-3 w-100 text-center my-auto">
							<span className=" fa fa-trash text-danger">Excluir</span>
						</span>
					
				</div>				

		);

	}
}

export default ItemCarrinho;

