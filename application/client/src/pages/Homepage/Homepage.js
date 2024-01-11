import React, { useState, useEffect } from 'react'


const GigList = ({ query }) => {
  const [data, setData] = useState([])
  const [dataType, setDataType] = useState('gigs') // Default to gigs
  
  const URL = process.env.BASE_URL || 'http://localhost:2000'

  useEffect(() => {

    const apiUrl = dataType === 'gigs' ? URL + '/get-gigs/' : URL + '/get-workers/'

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [query, dataType])

  useEffect(() => {
    if (query === 'worker') {
      setDataType('workers')
    } else {
      setDataType('gigs')
    }
  }, [query])

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {dataType === 'gigs' && (
            <div>
              {/* Render gig information here */}
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          )}
          {dataType === 'workers' && (
            <div>
              {/* Render worker information here */}
              <p>{item.FirstName} {item.LastName}</p>
              <p>{item.Location}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default GigList
