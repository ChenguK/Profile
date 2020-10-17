import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
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
          
          <div className="container" style={{ width: "80%"}}>
            <Switch>
              <Route exact path="/portfolio" render={({ history }) => 
                      <div>
                        <h3><u>Past Projects</u></h3>
                        <PortfolioPage 
                        history={history}
                        />
                      </div>
                    } />
                <Route exact path="" render={({ history }) => 
              <div>
                <div className="card">
                  <br />
                  <h5>Nice to meet you!</h5>
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
                    <br />
                    <ContactPage />
                    <br />
              </div>
                    
            } 
            />
                  
            </Switch>
      </div>
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
