import React from 'react'

import Menu from './Navigations/Menu'
import Navbar from './Navigations/Navbar'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import books from '../mocks/books'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: books,
      selectedFilter: 'All',
      menu: { open: false }
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      menu: { open: !state.menu.open }
    }))
  }

  selectFilter = filter => {
    this.setState({
      selectedFilter: filter,
      books:
        filter === 'All'
          ? books
          : books.filter(book => book.category === filter)
    })
  }

  render() {
    const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

    const tabItems = filters.map(filter => (
      <li
        className={filter === this.state.selectedFilter ? 'active' : ''}
        key={filter}
        onClick={() => this.selectFilter(filter)}
      >
        <a href="#0">{filter}</a>
      </li>
    ))

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <Navbar toggleMenu={this.toggleMenu} />

        <Header title="ReactJS Academy" />

        <section id="books">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Books</h2>
                <hr className="star-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">{tabItems}</ul>
              </div>
            </div>
            <div className="row book-list">
              {this.state.books.map(book => (
                <div className="col-xs-6 col-sm-3" key={book.id}>
                  <div className="thumbnail">
                    <img alt="" className="img-responsive" src={book.cover} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />

        <Footer />
      </div>
    )
  }
}

export default App
