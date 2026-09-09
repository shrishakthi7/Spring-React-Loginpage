import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import SigneUp from './SigneUp'

const RouterComp = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/signup' element={<SigneUp/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComp;