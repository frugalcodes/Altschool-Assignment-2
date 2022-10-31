import React, {useState, useEffect} from "react"


const User = ({ match }) => {

  useEffect (() => {
    fetchUser();
    console.log(match);
  }, [])

  const [user, setUser] = useState({})

  const fetchUser = async () => {
    const fetchUser = await fetch(`https://randomuser.me/api/`)
    const user = await fetchUser.json()
  
  } 
  return (
    <div>
       <h5>User is high</h5>

  </div>
  )
}

export default User