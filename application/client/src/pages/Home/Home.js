import React from 'react'

// * COMPONENT IMPORT
import CategorySideBar from 'ui/CategorySideBar'
import Feed from 'ui/Feed'

// * CSS IMPORT
import HomeCSS from './Home.module.css'

function
Home () {
  return (
  <div>
      <div className={HomeCSS.itemOne}><CategorySideBar /></div>
      <div className={HomeCSS.itemTwo}><Feed /></div>
      <div className={HomeCSS.itemThree}>Yessir</div>
  </div>

  )
}

export default Home

// const GigList = ({ query }) => {
//   const [data, setData] = useState([])
//   const [dataType, setDataType] = useState('gigs') // Default to gigs

//   useEffect(() => {
//     // Determine the data type and fetch data accordingly
//     const apiUrl = dataType === 'gigs' ? 'http://localhost:2000/get-gigs' : 'http://localhost:2000/get-workers'

//     const requestOptions = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }

//     fetch(apiUrl, requestOptions)
//       .then(response => response.json())
//       .then(data => {
//         setData(data)
//       })
//       .catch(error => console.error('Error fetching data:', error))
//   }, [query, dataType])

//   useEffect(() => {
//     // Update the data type when the query changes
//     if (query === 'worker') {
//       setDataType('workers')
//     } else {
//       setDataType('gigs')
//     }
//   }, [query])

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div key={index}>
//           {dataType === 'gigs' && (
//             <div>
//               {/* Render gig information here */}
//               <p>{item.title}</p>
//               <p>{item.description}</p>
//             </div>
//           )}
//           {dataType === 'workers' && (
//             <div>
//               {/* Render worker information here */}
//               <p>{item.FirstName} {item.LastName}</p>
//               <p>{item.Location}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default GigList
