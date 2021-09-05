import React from 'react'
import loaderDark from './DualRingDarks.gif'
import loaderLight from './DualRingLight.gif'

function Spinner(props) {

        //const {mode} = props ;

        return (
            <div className="text-center" >
                <img src={  props.mode === 'light' ? loaderDark  : loaderLight } alt="spinner" />
            </div>
        )
    
}

export default Spinner


