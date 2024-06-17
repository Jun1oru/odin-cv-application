import { useState } from 'react'
import Resume from './components/Resume';
import './App.css'

function App() {
  const [details, setDetails] = useState({
    personal: {
      firstName: "Andrei",
      lastName: "Rasmus",
      email: "andrei.rasmus13@gmail.com",
      phoneNumber: "123-123-123",
    },
    education: {
      school: "My school",
      degree: "My degree",
      startYear: 2090,
      endYear: 2094,
      location: "Mars",
    },
    experience: {
      company: "Test",
      position: "Idk",
      startYear: 2040,
      endYear: 2070,
      location: "Moon",
      description: "Lorem ipsum",
    },
  })

  return (
    <>
      <Resume
        details={details}
        setDetails={setDetails}
      />
    </>
  )
}

export default App
