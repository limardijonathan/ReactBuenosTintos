//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import MovieList from './MovieList';

class Movie extends Component{
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
            //console.log(movies)
            this.setState({products: products.products})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Listado de productos en DB</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Desc. Producto</th>
                                    <th>Tipo/Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    this.state.products.map((products,index)=>{
                                        return <MovieList  {...products} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
    }
}
export default Movie;
