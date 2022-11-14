import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from "./ErrorModel.module.css"
const ErrorMOdel = (props)=>{

    return(
        <div>
        <div className={classes.backdrop} onClick={props.onOK}/>
        <Card className={classes.modal}>
            <header className={classes.header}>
            {props.title}
            </header>
            <div className={classes.content}>
            {props.message}
            </div>
            <footer className={classes.actions}>
        <Button onClick={props.onOK} >OK</Button>
            </footer>

        </Card>
        </div>
    )
}

export default ErrorMOdel