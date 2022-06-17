import React, {useState} from 'react';
import classes from './App.module.css';
import {Score} from "./components/score/score";
import {Button} from "./components/Button/Button";

function App() {

  let [counter, setCounter] = useState(0)

    const onClickIncHandler = () => {
        setCounter(++counter)
    }

    const onClickResetHandler = () => {
        setCounter(0)
    }

  return (
    <div className={classes.App}>
        <div className={classes.content}>
            <div className={classes.counter}>
                <Score counter={counter} />
            </div>
            <div className={classes.buttonBlock}>
                <Button disabled={counter === 5} name={'Inc'} callback={onClickIncHandler}/>
                <Button name={'Reset'} callback={onClickResetHandler}/>
            </div>
        </div>

    </div>
  );
}

export default App;
