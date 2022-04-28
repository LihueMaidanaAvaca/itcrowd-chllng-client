import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getDetail, putProduct } from "../../actions";
import styles from "./EditProduct.module.css";
import {Link, useHistory} from 'react-router-dom';



export default function EditProduct(props){

    const myProduct = useSelector ((state)=> state.detail)
    const dispatch = useDispatch()
    const history = useHistory()
    // const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: myProduct.name,
        description: myProduct.description ,
        image_url:myProduct.image_url,
        price: myProduct.price,
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value
        // }))
    }
    
    
    
    function handleSubmit(e){
        e.preventDefault();
        // if(Object.values(errors).length > 0) alert ("Please finish the form")
        // else{

            dispatch(putProduct(myProduct.id, input));
            alert("Product successfully edited")
            setInput({
                name: "",
                description: "",
                image_url:"",
                price: 0,
            })
            history.push(`/${myProduct.id}`)
        // }
    }


    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[props.match.params.id, dispatch])

    

    return(
        <div className={styles.every}>
            <Link to= '/home' ><button>Home</button></Link>
            <h1 className={styles.title}>Edit Product</h1>
            <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label className={styles.label}>name:</label>
                    <input type= "text" value= {input.name} name= "name" onChange={(e)=>handleChange(e)}
                    />
                    {/* {errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>description:</label>
                    <textarea className={styles.largetext} type= "text"  value= {input.description} name= "description" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.description && (
                    <p className={styles.error}>{errors.description}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>Image:</label>
                    <input type= "url" value= {input.image_url} name= "image_url" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.image_url && (
                    <p className={styles.error}>{errors.image_url}</p>
                    )} */}
                </div>
                <div>
                    <label className={styles.label}>price:</label>
                    <input type= "number" min="30" max="200" size={3} value= {(input.price)} name= "price" onChange={(e)=>handleChange(e)}/>
                    {/* {errors.price && (
                    <p className={styles.error}>{errors.price}</p>
                    )} */}
                </div>
                
               
                
                
            <button  className={styles.label}type='submit' >Save</button>
            
                
            </form>
           
        </div>
    )
}