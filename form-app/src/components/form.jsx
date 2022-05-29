
import React, { useState } from "react";
import styles from "./form.module.css"
import { Append } from "./append";

export const Form=()=>{

    const [formData,setFormdata]=useState({})

    const handleChange=(e)=>{
        const inputName= e.target.name;
        if(e.target.type==="checkbox"){
            setFormdata({
                ...formData,
                [inputName]:e.target.checked
            })
        }
        else if(e.target.type==="file"){
            setFormdata({
                ...formData,
                [inputName]:e.target.files
            })
            console.log(e.target.files)
        }
        else{
            setFormdata({
                ...formData,
                [inputName]:e.target.value
            })
        }

    }
    const handleSubmit =async (event)=>{
        event.preventDefault()
        let res= await fetch("http://localhost:3000/FORMDATA",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(
                formData
            ),
        }) 
        let data= await res.json()  
        console.log(data)
    }
    return (
        <>
        <h1>Form</h1>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            
                <div className={styles.grid}>
                    <label  htmlFor="">User Name : </label>
                    <input type="text" name="username" onChange={handleChange}/>
                </div>
                <div className={styles.grid}>
                    <label htmlFor="">Password : </label>
                    <input type={formData.ShowPassword ? "text" : "password"} name="password" onChange={handleChange} />
                </div>
                <div className={styles.grid1}>
                    <input type="checkbox" name="ShowPassword" onChange={handleChange} />
                    <label htmlFor="">Show Password</label>
                </div>
                <div className={styles.grid}>
                    <label htmlFor="">Age : </label>
                    <input type="number" name="age" onChange={handleChange} />
                </div>  
                <div className={styles.grid}>
                    <label htmlFor="">DOB : </label>
                    <input type="date" name="dob" onChange={handleChange} />
                </div>
                <div className={styles.grid}>
                    <label htmlFor="">RESUME : </label>
                    <input type="file" name="resume" onChange={handleChange} />
                </div>
                <div className={styles.submit}>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </div>
        <Append/>
        </>
    )
}
