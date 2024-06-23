import React, { useState } from "react";
import './tableimplementation.css'


const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



export default function XTableImplementation(){
    const[sortData, setSortData] = useState(data)

    const handleSortByDate = () => {
       const sortedData = [...sortData].sort((a,b) => {
        return new Date(a.date) - new Date(b.date);
       })
       setSortData(sortedData);
       console.log(sortData)
    }
   
    const handleSortByViews = () => {
        const sortedData = [...sortData].sort((a, b) => {
            return a.views - b.views;
        })
        setSortData(sortedData);
        console.log(sortData)

    }

    return(
        <div className="container">
            <button onClick={handleSortByDate}>Sort by Date</button>
            <button onClick={handleSortByViews}>Sort by Views</button>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Views</th>
                            <th>Article</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortData && (
                            sortData.map((item) => {
                               return(
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.article}</td>
                                    <td>{item.views}</td>
                                </tr>
                               )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}