//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

class LastProductInDb extends Component{
    constructor(){
        super();
        this.state ={
            productsListados : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('http://localhost:5050/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(genres)
            this.setState({
                productsListados: products.products.pop()
            })
        })
        .catch(error => console.log(error))
        console.log('primera vez')

    }

    componentDidUpdate(){
        console.log('componente cambio', this.state)
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
 						{/*<!-- Last Movie in DB -->*/}
                         <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último Producto de alta en base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.productsListados.image} alt=" Star Wars - Mandalorian "/>
									</div>
                                    <h3>{this.state.productsListados.name}</h3>
									<p>{this.state.productsListados.description}</p>
								</div>
							</div>
						</div>

    
    </React.Fragment>
    )
    }
}
export default LastProductInDb;
