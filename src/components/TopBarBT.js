import React from 'react'
import { Link } from 'react-router-dom';



export default function TopBar() {
    return (
        
        <header className='header'>
        <section>
            <div className="section-advertising">
                BEBER CON MODERACION. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.
            </div>    
        </section>
        <div className="container-header">
            <div className="subcontainer-header"> 
                <div id="logo">
              
                </div>
                <div className="search">
                <form className="form-search">
                    <input className="search-input" autocomplete="off" type="search" name="q" placeholder="Buscar" aria-label="Buscador"></input>
                    <svg className="svg-buscar">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>                    </svg>               
                </form>
                </div>
                <div id="login-registro">
                  
                  
                       
                        <svg className="svg">
                        <path className="path" d="M12,12A5,5,0,1,0,7,7,5,5,0,0,0,12,12Zm0-8A3,3,0,1,1,9,7,3,3,0,0,1,12,4Zm4,10H8a5,5,0,0,0-5,5v2a1,1,0,0,0,2,0V19a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v2a1,1,0,0,0,2,0V19A5,5,0,0,0,16,14Z">
                        </path></svg>
                       
                  
                  
                    
                   
                        <svg className="svg">
                            <path className="path" d="M21.79,5.39l-3-4A1,1,0,0,0,18,1H6a1,1,0,0,0-.8.4l-3,4A1,1,0,0,0,2,6H2V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6h0A1,1,0,0,0,21.79,5.39ZM6.5,3h11L19,5H5ZM7,10a1,1,0,0,1,2,0,3,3,0,0,0,6,0,1,1,0,0,1,2,0A5,5,0,0,1,7,10ZM20,20a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7H20Z">
                        </path></svg>
                    
                </div>
            </div>
            <div>
                <div className="nav-desktop">
                 <ul>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Inicio</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Sets de Vinos</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Tintos</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Blancos</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Rosados</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Dulces</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Espumantes</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Como Comprar</Link></li>
                     <li className="nav-item"><Link className="a-nav-item"  to="/">Medios de envio</Link></li>
                     <li className="nav-item"><Link className="a-nav-item" to="/">Ver Todos</Link></li>                 
                 </ul>
                </div>
                <div className="burger-menu">
                    <i className="fa fa-bars burger"></i>
                </div>
            </div>
            
        </div>
    </header>
       
    )
}
