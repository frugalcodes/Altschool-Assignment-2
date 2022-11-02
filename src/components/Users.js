import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

const Users = () => {

  

  useEffect(() => {
   FetchUsers()
  }, [])


  const [usersData, setUsersData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);


  const usersPerPage = 68;
  const pagesVisited = pageNumber * usersPerPage;

  const DisplayUsers = usersData.slice(pagesVisited, pagesVisited + usersPerPage).map((usersDatainfo) => {
  
  return (
    <h2 className="load-img" key={usersDatainfo.cell}>
    <Link to={`/users/${usersDatainfo.cell}`}><img src= {usersDatainfo.picture.medium} /></Link>
    </h2>)
  })


  const FetchUsers = async () => {
    
    const data = await fetch('https://randomuser.me/api/?results=2000')
    const usersData = await data.json()
    
    setUsersData(usersData.results)
    console.log(usersData.results)
  }

  const pageCount = Math.ceil(usersData.length / usersPerPage);


  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
    {DisplayUsers}
    <ReactPaginate

      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
   </>
  )
}

export default Users