import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Gallery from './pages/gallery/gallery.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import Blog from './pages/blog/blog.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const GalleryDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>Gallery Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}



function App() {
  return (
    <div>
     <Header />
     <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/gallery' component={Gallery} />
      <Route path='/gallery/:topicId' component={GalleryDetail} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route exact path='/blog' component={Blog} />
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
