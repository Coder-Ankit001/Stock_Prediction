import React from 'react'
import Button from './Button'

const Content = () => {
    return (
        <>
            <div className='bg-slate-800 h-[80vh] w-full flex justify-center'>
                <div className='w-[60vw] h-[60vh] bg-slate-600 rounded-lg mt-10 flex flex-col items-center gap-y-6'>
                    <div className='text-3xl font-semibold text-white mt-4'> Stock Prediction Portal </div>
                    <div className='text-white w-[90%] text-xl flex flex-col items-center gap-y-2'>
                        <p>Stock Predictor is a smart platform designed to help you understand</p>
                        <p>and anticipate market movements. Track performance, compare</p>
                        <p>Using advanced analytics, it generates reliable stock predictions.</p>
                        <p>stocks, and make informed decisions with ease. Stay ahead of</p>
                        <p>the market with insights you can trust.</p>

                    </div>
                    <Button text='login' class='border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500'/>
                </div>
            </div>
        </>
    )
}

export default Content
