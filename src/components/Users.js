import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

  

  useEffect(() => {
   FetchUsers()
  }, [])


  const [usersData, setUsersData] = useState([]);

  const FetchUsers = async () => {
    
    const data = await fetch('https://randomuser.me/api/?results=500')
    const usersData = await data.json()
    
    setUsersData(usersData.results)
    console.log(usersData.results)
  }


  return (
    <>
    {
      usersData.map(usersDatainfo => (
        <h2 className="load-img" key={usersDatainfo.cell}>
        <Link to={`/users/${usersDatainfo.cell}`}><img src= {usersDatainfo.picture.medium} /></Link></h2>
      
      ))
    }
    

  </>
  )
}

export default Users