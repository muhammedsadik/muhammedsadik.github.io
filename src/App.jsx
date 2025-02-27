const dataPath = "../public/json/data.json"
import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [data, setData] = useState()

  useEffect(() => {

    async function getData() {
      try {

        const response = await fetch(dataPath)
        const resData = await response.json()
        setData(resData)

      } catch (e) {
        console.log(e);
      }
    }

    getData();

  }, [])

  return (
    <>
      <div className='github'>
        <h1>GitHub</h1>
        {
          data?.homeworks?.map(d => (
            <div className='card' key={d.projectName}>
              <a href={d.github} target='_blank'>
                {d.projectName}
              </a>
            </div>
          ))
        }

      </div>

      <div className='vercel'>
        <h1>Vercel</h1>
        {
          data?.homeworks?.map(d => (
            <div className='card' key={d.projectName}>
              <a href={d.vercel} target='_blank'>
                {d.projectName}
              </a>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default App
