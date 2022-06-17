import React from 'react';
import classes from "../../App.module.css";

type ButtonType = {
    disabled?: boolean
    name: string
    callback: () => void
}

export const Button = ({callback, name, disabled}: ButtonType) => {

    const onClickIncHandler = () => {
        callback()
    }
    return (
        <div>
            <div>
                <button disabled={disabled} className={classes.button} onClick={onClickIncHandler}>{name}</button>
            </div>
        </div>
    );
};
