import React from 'react';
import classes from './Score.module.css'

type ScoreType = {
    counter: number
}

export const Score = ({counter}: ScoreType) => {
    return (
        <div>
            <div className={counter === 5 ? classes.disabled : classes.content}>
                <p className={classes.counter}>{counter}</p>
            </div>
        </div>
    );
};

