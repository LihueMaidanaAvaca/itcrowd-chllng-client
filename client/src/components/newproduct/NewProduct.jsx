import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postNewProduct, getBrands} from '../../actions';
import { useDispatch } from "react-redux";
import styles from "./NewProduct.module.css"


function validate(input){
    let errors={};
    if(!input.name ){errors.name = 'Name is require'}
    if(!input.description){errors.description = 'Write 20 to 100 characters'}
    if(!input.image_url ){errors.image = 'Use an url'}
    if(!input.price ){errors.price = 'It has to be beetween 30 and 200 dolars'}
    if(!input.brand ){errors.brand = 'Name is require'}
    if(!input.logo_url ){errors.logo_url = 'Use an url'}
    return errors;
}

export default function NewProduct(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        image_url:"",
        price: 0,
        brand: "",
        logo_url:""
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(Object.values(errors).length > 0) alert ("Please finish the form")
        else{

            dispatch(postNewProduct(input));
            alert("New Product Save")
            setInput({
                name: "",
                description: "",
                image_url:"",
                price: 0,
                brand: "",
                logo_url:""
            })
            history.push('/home')
        }
    }


    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    return(
        <div className={styles.page}>
            <Link to= '/home' ><button>Home</button></Link>
            <section className={styles.container}>

            <h1 className={styles.title}>NewProduct</h1>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div>
                    <label className={styles.label}>Name:</label>
                    <input type= "text" value= {input.name} name= "name"onChange={(e)=>handleChange(e)}
                    />
                    {errors.name && (
                        <p className={styles.error}>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label className={styles.label}>Description:</label>
                    <textarea className={styles.largetext} type= "text"  value= {input.description} name= "description" onChange={(e)=>handleChange(e)}/>
                    {errors.description && (
                        <p className={styles.error}>{errors.description}</p>
                    )}
                </div>
                <div>
                    <label className={styles.label}>Image:</label>
                    <input type= "url" value= {input.image_url} name= "image_url" onChange={(e)=>handleChange(e)}/>
                    {errors.image_url && (
                        <p className={styles.error}>{errors.image_url}</p>
                    )}
                </div>
                <div>
                    <label className={styles.label}>Price:</label>
                    <input type= "number" min="30" max="200" size={3} value= {(input.price)} name= "price" onChange={(e)=>handleChange(e)}/>
                    {errors.price && (
                        <p className={styles.error}>{errors.price}</p>
                    )}
                </div>
                
                <div>

                <label>Brand:</label>
                <input type= "text" value= {input.brand} name= "brand" onChange={(e)=>handleChange(e)}
                    />
                    {errors.brand && (
                        <p className={styles.error}>{errors.brand}</p>
                    )}
                </div>
                <div>
                    <label className={styles.label}>Logo Image:</label>
                    <input type= "url" value= {input.logo_url} name= "logo_url" onChange={(e)=>handleChange(e)}/>
                    {errors.image_url && (
                        <p className={styles.error}>{errors.image_url}</p>
                    )}
                </div>
                
                
            <button  className={styles.add} type='submit' >Save</button>
            
                
            </form>
           
                    </section>
        </div>
    )




}

