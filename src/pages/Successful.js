import React from 'react'


function Successful() {
  return (
    <div>
        <Router>
        <div>
        <h1>Thank you for Signing up!</h1>
        <h2>You can now login using your email and password.</h2>
        <Button>Login</Button>
        </div>
        <Routes>
        <Route path= "/Successful" element={ <Successful />} />
        </Routes>
        </Router>
    </div>
  )
}

export default Successful