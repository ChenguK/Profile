import React, { Component } from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../HeaderPage/HeaderPage';
import BioPage from '../BioPage/BioPage';
import Loading from '../../components/Loading/Loading';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import ResumePage from '../ResumePage/ResumePage';
import ProcessPage from '../ProcessPage/ProcessPage';
import SkillsPage from '../SkillsPage/SkillsPage';
import Video from '../../components/Video/Video';

class App extends Component {
state = {
  loading: true,
};

async componentDidMount(){ 
  loadingPage().then(() => this.setState({ loading: false }));
}
  render () {
    return (
      this.state.loading ? <Loading /> :
      <div className="App center">
        <header className="navbar-fixed center white"
          width="100%" 
          style={{ margin: "0 0 1rem 1rem", padding: "1.25rem 1rem 0 0" }}>
          <div className="nav-wrapper">
            <NavBar />
          </div>
        </header>
          
            <Header className="header"/>
            <h4><i>Work is Love Made Visible- Kahlil Gibran</i></h4>
            
          <div className="row center" style={{ width: "100%", margin: "2rem 3rem 2rem 4.5rem"}}>
            <div className="col s6">
              <div className="card">
                <br />
                <Video />
                <br />
                  <hr />
                  <br />
                <SkillsPage />
                  <br />
                  <hr />
                  <br />
                <ProcessPage />
                  <hr />
                  <br />
                <ResumePage />
                  <br />
                  <hr />
                  <br />
                <BioPage />
                  <br />
                  <br />
              </div>
            </div>
            <div className="col s6">
              <PortfolioPage />
            </div>
          </div>
          <br />

          <ContactPage />
            <br />
          <footer style={{ paddingBottom: "30px" }} className="page-footer transparent">
            <div className="right black-text">All Rights Reserved, &copy; {new Date().getFullYear()} Chengu Kargbo &nbsp;</div>
          </footer>
      </div>
    );
  }
}
function loadingPage() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  
}


export default App;
