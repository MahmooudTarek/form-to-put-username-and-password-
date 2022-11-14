import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from "./userInput.module.css"
import Button from '../UI/Button';
import UserList from './userList';
import ErrorMOdel from '../UI/ErrorModel';
import Wrapper from '../helpers/wrapper';
const UserInput = (props)=>{
    console.log(props)
    const [addUser,setAddUser]= useState("")
    const [addAge,setAddAge]= useState("")
    const [error,setErrror]=  useState("")

    const addUserHandler=(event)=>{
        event.preventDefault()
        if(addUser.trim().length===0    ||  addAge.trim().length===0){
            setErrror({
                title:"an error occured unvalid inputs",
                message:"please enter a valid name and age (not empty inputs)"
            })
            return ;
        }
        if(+addAge<1){
            setErrror({
                title:"an error happend in age",
                message:"age should be greater than 1"
            })
            return;
        }
        props.onAddUser(addUser,addAge)
        console.log(addUser,addAge)
        setAddAge("")
        setAddUser("")
    }
    const changeUserHandler = (event)=>{
        setAddUser(event.target.value)
    }
    const changeAgeHandler = (event)=>{
        setAddAge(event.target.value)
    }
    const errorHandler =   ()=>{
        setErrror(null)
    }

    return (
        <Wrapper>
       {error&& <ErrorMOdel title={error.title} message={error.message} onOK={errorHandler}/>}    
    <Card className={classes.input }>
    <form onSubmit={addUserHandler}>
    <label htmlFor='username'>UserName</label>
    <input  id='username' type="text" onChange={changeUserHandler} value={addUser}/> 
    <label htmlFor='age'>age(years)</label>
    <input id='age' type="number" onChange={changeAgeHandler} value={addAge}/> 
    <Button   type='submit'>addUser</Button>
    </form>

    </Card>
    </Wrapper>
    )
}

export default UserInput