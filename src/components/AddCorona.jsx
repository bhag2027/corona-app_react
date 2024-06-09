import React, { useState } from 'react'
import NavBar from './NavBar'

export const AddCorona = () => {
    const[data,changeData]=useState(
        {
            "cases":"",
            "Deaths":"",
            "Discharge":"",
            "vaccinated":"",
            "nonvaccinated":"",
            "Recovered":""
        }
    )
    const inputHandler=(event)=>{
      changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <h1 align="center"><u>CORONA REPORT</u></h1>
                <div className="container">
            <div className="row">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirmedcases</label>
                                <input type="text" className="form-control" name='cases' value={data.cases} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Deaths</label>
                                <input type="text" className="form-control" name='Deaths' value={data.Deaths}onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Discharged</label>
                                <input type="text" className="form-control" name='Discharge'value={data.Discharge}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vaccinated</label>
                                <input type="text" className="form-control" name='vaccinated' value={data.vaccinated}onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Nonvaccinatted</label>
                                <input type="text" className="form-control" name='nonvaccinated' value={data.nonvaccinated} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Recovered</label>
                                <input type="text" className="form-control" name='Recovered' value={data.Recovered} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
