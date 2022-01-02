/* eslint-disable prettier/prettier */
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'
import Home from './components/home/Home';


function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Router>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path='/books/:id' component={BookDetail} />
          <Route path='/books' component={BookList} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
