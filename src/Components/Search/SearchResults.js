import React, { Component } from 'react';

 class SearchResults extends Component {
    constructor() {
        super();

        this.state = {
            
        };
    }

  render() {
    return (
        <div className="search-results">
            <div className="row">
                <div className="col s12">
                    <ul>
                        <li>
                            <a href="javascript;">
                                <img src="" />
                                <p>Movie Title</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

export default SearchResults;