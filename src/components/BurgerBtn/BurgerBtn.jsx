import React from 'react';
import { forwardRef } from 'react/cjs/react.development';
import './burgerBtn.scss'

const BurgerBtn = forwardRef((props,ref)=>{
    const burgerClass = props.active ? 'burger burger--active' : 'burger';
    return (
        <div className={burgerClass} onClick={props.handler} ref={ref}>
            <span></span>
        </div>
        
    )

})

export default BurgerBtn

