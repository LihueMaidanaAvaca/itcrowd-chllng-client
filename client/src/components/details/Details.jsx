import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteProduct } from "../../actions";
import { useEffect } from "react";
import style from "./Details.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const history = useHistory()

    const myProduct = useSelector ((state)=> state.detail)


    function handleDelete(id){
        dispatch(deleteProduct(id));
        history.push('/home')
    }
    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[props.match.params.id,dispatch])
    
    
    
   
    
    console.log(myProduct)
    return (
        <section className={style.container} >          
         <Link to= '/home' className={style.home}>Home</Link>
            
                
            <div class={style.details}>
                    <h1 className={style.title}>{myProduct.name} </h1>
                <div className={style.info}>
                    
                    <img src={myProduct.image_url} className={style.image_url} alt="sneaker" />
                    
                    <div className={style.text}>
                    
                     <h2>U$D{myProduct.price}</h2>
                     <h3>{myProduct.description}</h3>
                     <div>
                     <Link to={`/edit/${myProduct.id}`} >edit</Link>
                     </div>
                     <button onClick={()=>handleDelete(myProduct.id)}>delete</button>

                    </div>
                </div> 
            </div>  
            
        </section>
    )
}