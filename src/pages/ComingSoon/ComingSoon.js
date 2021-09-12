import React from 'react'
import ComingCountDown from '../../Components/ComingSoon/ComingCountDown'
import ComingForm from '../../Components/ComingSoon/ComingForm'
export default function ComingSoon() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-12 p-0">
                    <ComingForm/>
                </div>
                <div className="col-lg-7 col-12 p-0">
                    <ComingCountDown/>
                </div>
            </div>
        </div>
    )
}
