import React from 'react'
import { ApplicationStatusList } from '../../../app/constants';

function Stepper({ steps, activeStep, setActiveStep }) {
    console.log(steps, activeStep, setActiveStep);
    return (
        <div style={{display: "flex", flexDirection: 'column', flexWrap: "wrap", justifyContent: "center", alignContent: "center"}}>
            {ApplicationStatusList.map((status) => {
                console.log(status, );
                return <div className='steps-container' onClick={() => setActiveStep(activeStep + 1)}>
                    <div className="steps step-active">
                        <span><i className="fa fa-check"></i></span>
                    </div>
                    <span className="line line-active"></span>
                </div>
            })
            }
            <div className='steps-container'>
                <div className="steps step-active">
                    <span><i className="fa fa-check"></i></span>
                </div>
                <span className="line line-active"></span>
            </div>
            <div className='steps-container'>
                <div className="steps step-inactive">
                    <span><i className="fa fa-check"></i></span>
                </div>
                <span className="line line-inactive"></span>
            </div>
            <div className='steps-container'>
                <div className="steps step-inactive">
                    <span className="font-weight-bold">3</span>
                </div>
            </div>
        </div>
    )
}

export default Stepper