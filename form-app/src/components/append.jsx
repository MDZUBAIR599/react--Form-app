import { useEffect, useState } from "react"


export const Append=()=>{

    const [mapData,setmapData]=useState([])
    // console.log(mapData)

    const getdata=async()=>{
        let res=await fetch(" http://localhost:3000/FORMDATA")
        let data = await res.json()
        console.log(data)
        setmapData(data)
    }

    useEffect(()=>{
        getdata()
    },[])
    
    return(
        <div>
            <center>
            <table className="table" border="1">
                <thead>
                    <tr>
                        <th>SI NO</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>RESUME</th>
                    </tr>
                </thead>
                <tbody>
                {mapData.map((el, index) => {
                return (
                    // <div>{el.username}chaita</div>
                <tr key={el.id} className="houseDetails">
                        <td>{el.id}</td>
                        <td>{el.username}</td>
                        <td>{el.password}</td>
                        <td>{el.age}</td>
                        <td>{el.dob}</td>
              </tr>
            );
          })}
                </tbody>
            </table>
            </center>
            
        </div>
    )
}