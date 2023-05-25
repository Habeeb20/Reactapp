import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/post'>
          <NewPost />
        </Route>

        <Route  path='/post/:id'>
        <PostPage />

        </Route>
    
        
        <Route path='/About' component= {About}/>
        <Route path='*' component = {Missing}/>
        

      </Routes>
     
      <Footer />
     
    </div>
  );
}

export default App;
