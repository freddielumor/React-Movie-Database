import React, { Component } from 'react';
import { Input, InputGroup } from 'rsuite';

 class SearchInput extends Component {
  render() {
    return (
        <div className="search-input">
            <form>
                <Input
                    placeholder="Search for a movie..."
                />
            </form>
        </div>
    )
  }
}

export default SearchInput;