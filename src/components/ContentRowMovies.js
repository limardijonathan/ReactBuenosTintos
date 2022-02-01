import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react'

function ContentRowTop(){
    const[products, setProducts] = useState([])
    useEffect(()=>{console.log('se monto el componente')
    fetch('http://localhost:5050/api/products')
    .then(respuesta =>{return respuesta.json()})
    .then(data=>{
        setProducts(data)
    })
    .catch(error=>{console.log(error)})   
    },[])
    useEffect(()=>{
    console.log('se actualizo el componente')
    },[products])  
    
    useEffect(()=>{
    return ()=> console.log('se desmonto el componente')
    },[])
    


    const[users, setUsers] = useState([])
    useEffect(()=>{console.log('se monto el componente')
    fetch('http://localhost:5050/api/users')
    .then(respuesta =>{return respuesta.json()})
    .then(data=>{
        setUsers(data)
    })
    .catch(error=>{console.log(error)})   
    },[])
    useEffect(()=>{
    console.log('se actualizo el componente')
    },[users])  
    
    useEffect(()=>{
    return ()=> console.log('se desmonto el componente')
    },[])


    let productInDataBase = {
        color:   "primary",
        titulo: "TOTAL DE PRODUCTOS",
        valor: products.count,
        icono: "fas fa-film",
    }
    
    let amount ={
        color:   "success",
        titulo: "TOTAL DE CATEGORIAS",
        valor: products.countCategory,
        icono: "fas fa-award",
    }
    
    let user = {
        color:   "warning",
        titulo: "TOTAL DE USUARIOS",
        valor: users.count,
        icono: "fas fa-user",
    }
    
    let cardProps = [productInDataBase,amount,user];
    





    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;