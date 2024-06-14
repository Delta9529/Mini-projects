import React, { useEffect, useState } from "react";
import axios from "axios";
import './pagination.css'

export default function XPagination(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1); 


    useEffect(() => {
        axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        .then((response) => {
            setData(response.data);
            setLoading(false);

        })
        .catch((error) => {
            alert("failed to fetch data : ", error)
        })
    },[])

    if(loading){
        <p>Loading...</p>
    }

    console.log(data)

    const itemsPerPage = 10;
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const paginate = (pagenumber) => {
        const startIndex = (pagenumber-1)*itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex,endIndex).map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
            </tr>
        ));
    }

    const prevPage = () => {
        setCurrentPage(currentPage-1);
    }

    const nextPage = () => {
        setCurrentPage(currentPage+1);
    }



    return(
        <div className="container">
            <h3>Employee Data Table</h3>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginate(currentPage)}
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button>{currentPage}</button>
                    <button onClick={nextPage} disabled={currentPage === maxPage}>Next</button>
            </div>
        </div>
    )
}