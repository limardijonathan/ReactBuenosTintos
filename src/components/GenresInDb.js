//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import Genre from './Genre';

class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
            products : []
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
            this.setState({products: products.countByCategory.data})
        })
        .catch(error => console.log(error))

    }

    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Cantidad de productos por Categoria</h5>
                        </div>
                        <div className={"card-body"}>
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    this.state.products.map((products,index)=>{
                                        return  <Genre  {...products}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default GenresInDb;
