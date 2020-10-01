import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../HeaderPage/HeaderPage';
import BioPage from '../BioPage/BioPage';
import Loading from '../../components/Loading/Loading';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import ContactPage from '../ContactPage/ContactPage';
import ResumePage from '../ResumePage/ResumePage';

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
        <header className="navbar-fixed" 
          style={{ margin: "2rem 2rem 2rem 1rem" }}>
          <div className="nav-wrapper">
            <NavBar />
          </div>
        </header>
          
            <Header />
          <div className="row center" style={{ width: "100%", margin: "2rem 3rem 2rem 4.5rem"}}>
            <div className="col s5">
              <div className="card">
              <BioPage />
              <ResumePage />
              </div>
            </div>
            <div className="col s7 right">
              <PortfolioPage />
            </div>
          </div>
          <br />

          <ContactPage />
            <br />
          <footer style={{ paddingBottom: "30px" }} className="page-footer black">
            <div className="right">All Rights Reserved, &copy; 2020 Chengu Kargbo &nbsp;</div>
          </footer>
      </div>
    );
  }
}
function loadingPage() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  
}


export default App;
