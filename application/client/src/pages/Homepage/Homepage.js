import React, { useState, useEffect } from 'react'


const GigList = ({ query }) => {
  const [data, setData] = useState([])
  const [dataType, setDataType] = useState('gigs') // Default to gigs

  useEffect(() => {
    // Determine the data type and fetch data accordingly
    const apiUrl = dataType === 'gigs' ? 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs/' : 'https://workwaves-jm2b5.ondigitalocean.app/api/get-workers/'

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
    // Update the data type when the query changes
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
