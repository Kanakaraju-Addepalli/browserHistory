import {Component} from 'react'
import BrowserItem from '../BrowserItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      browserList: props.initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  browserHistoryItem = id => {
    const {browserList} = this.state
    const updateBrowserList = browserList.filter(eachItem => eachItem.id !== id)
    this.setState({browserList: updateBrowserList})
  }

  render() {
    const {searchInput, browserList} = this.state
    const searchResults = browserList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              className="search-input"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>

        <div className="destinations-search-container">
          {searchResults.length > 0 ? (
            <ul className="destinations-list">
              {searchResults.map(eachDestination => (
                <BrowserItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                  browserItem={this.browserHistoryItem}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-history">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}
export default BrowserHistory
