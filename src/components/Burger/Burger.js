import React from 'react';
import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trnsformedIngredients = Object.keys(props.ingredients).map((igKey) =>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key ={igKey + i} type={igKey} />;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(trnsformedIngredients.length === 0){
        trnsformedIngredients = <p>Bhai kai nakh</p>;
    }
    return (<div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trnsformedIngredients}
            <BurgerIngredient type="bread-bottom" />
    </div>)
}

export default burger;