import React, { Component, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Tootoad from './components/Funktsioonid/Tootoad';
import Kursused from './components/Funktsioonid/Kursused';
import Spordipsuhholoogia from './components/Funktsioonid/Spordipsuhholoogia';
import {BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/About/Contact';
import Mangijale from './components/Lahendused/Mangijale';
import Treeneritele from './components/Lahendused/Treeneritele';
import Jalgpalliliidule from './components/Lahendused/Jalgpalliliidule';
import Klubidele from './components/Lahendused/Klubidele';
import Lapsevanemale from './components/Lahendused/Lapsevanemale';
import Lahendused from './components/Lahendused/Lahendused';
export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (

         <Router>

        <div id="page-container">
                    <Header />

                    <div id="et-main-area">

                      <div id="main-content">

                        <Switch>
                          <Route path="/" exact> <Home/> </Route>
                          <Route path="/tootoad" ><Tootoad/> </Route>
                          <Route path="/kursused" ><Kursused/>  </Route>
                          <Route  path="/spordipsuhholoogia" > <Spordipsuhholoogia/> </Route>
                          <Route  path="/about" > <About/> </Route>
                          <Route  path="/contact" > <Contact/> </Route>
                          <Route  path="/mangijale" > <Mangijale/> </Route>
                          <Route  path="/lapsevanemale" > <Lapsevanemale/> </Route>
                          <Route  path="/klubidele" > <Klubidele/> </Route>
                          <Route  path="/jalgpalliliidule" > <Jalgpalliliidule/> </Route>
                          <Route  path="/treeneritele" > <Treeneritele/> </Route>
                          <Route  path="/lahendused" > <Lahendused/> </Route>
                          <Redirect to="/" />
                        </Switch>

                        <Footer />
                      </div>
                    </div>
             </div>

        </Router>
      )
    }
}

export default Layout
