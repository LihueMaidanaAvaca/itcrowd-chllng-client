import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteProduct } from "../../actions";
import { useEffect, useState } from "react";
import style from "./Details.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const [stats, setStats] = useState([]);
    const history = useHistory()

    const myProduct = useSelector ((state)=> state.detail)


    function handleDelete(id){
        dispatch(deleteProduct(id));
        history.push('/home')
    }
    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[props.match.params.id,dispatch])
    
    
    
    useEffect(() => {
        setStats(myProduct);
    }, [myProduct, dispatch])
    
    console.log(stats)
    return (
        <section className={style.container} >          
         <Link to= '/home' class={style.home}>Home</Link>
            {
                myProduct.length>0?
            <div class={style.details}>
                    <h1 className={style.title}>{myProduct[0].name} </h1>
                <div className={style.info}>
                    
                    <img src={myProduct[0].image_url} className={style.image_url} alt="sneaker" />
                    
                    <div className={style.text}>
                    
                     <h2>U$D{myProduct[0].price}</h2>
                     <h3>{myProduct[0].description}</h3>
                     <div>
                     <Link to={`/edit/${myProduct[0].id}`} >edit</Link>
                     </div>
                     <button onClick={()=>handleDelete(myProduct[0].id)}>delete</button>

                    </div>
                </div> 
            </div>  :<p>Loading...</p>
            }
        </section>
    )
}