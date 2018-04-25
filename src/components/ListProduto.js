import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class ListProduto extends Component{

	render(){
		return(

			<div>

				<p className="h4" >Produtos para {this.props.especie}:</p>
				
				<div className="row">
					{this.props.produtos.map( (produto) => (
						<Link className="col col-lg-3 col-sm-6 my-1" to= {`/Produto${produto.id}`} >
							<div className=" shadow rounded text-center produto" >
								<img className= "img-fluid p-3" src={require(`../assets/fotos/${produto.imagem}`)} alt="foto do produto" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.nome}</p>
									<p className=" text-center text text-secondary price" >{produto.preco}</p>
								</div>
							</div>
						</Link>))}
				</div>
				
			</div>


		);

	}
}

export default ListProduto;
