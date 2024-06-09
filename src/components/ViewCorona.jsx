import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCorona = () => {
  const [data, changeData] = useState(

    
      {
        
        "data": {
          "summary": {
            "total": 43119112,
            "confirmedCasesIndian": 43119064,
            "confirmedCasesForeign": 48,
            "discharged": 42576815,
            "deaths": 524201,
            "confirmedButLocationUnidentified": 0
          },
          "unofficial-summary": [],
          "regional": []
        },
        "lastRefreshed": "2022-05-14T03:47:21.111Z",
        "lastOriginUpdate": "2022-05-14T02:30:00.000Z"
      
    }


  )
  const fetchData=()=>{
    axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
      (response)=>{
        changeData(response.data)
      }
    ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])

  return (
    <div>
      <NavBar />
      <h1 align="center"><u>CORONA REPORT</u></h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <table className="table table-bordered border-primary">

                <thead>
                  <tr>
                    <th scope="col">location</th>
                    <th scope="col">Confirmedcasesindian</th>
                    <th scope="col">Discharged</th>
                    <th scope="col">Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.regional.map(
                    (value, index) => {
                      return <tr>

                        <td>{value.loc}</td>
                        <td>{value.confirmedCasesIndian}</td>
                        <td>{value.discharged}</td>
                        <td>{value.discharged}</td>
                      </tr>
                    }
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCorona