import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "pages/Home"
import Detail from "pages/Detail"

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </BrowserRouter>
  )
}

export default Router
