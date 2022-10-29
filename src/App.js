import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import CompanyList from './components/CompanyList'
function App() {
  const [companyList, setCompanyList] = useState(null)
  const baseURL = 'http://demo2211087.mockable.io/mock'

  useEffect(() => {
    axios.post(baseURL).then((response) => {
      setCompanyList(response.data)
    })
  }, [])

  return (
    <div className="container">
      <h3>91 TECHNOLOGIES PRIVATE LIMITED</h3>
      <CompanyList companyList={companyList} />
    </div>
  )
}

export default App
