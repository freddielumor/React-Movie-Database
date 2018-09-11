import React, { Component } from 'react';
import { Grid, Row, Col, Input } from 'rsuite';
import axios from 'axios';
import './Search.scss';

// Components
import SearchResult from './SearchResult';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            apiUrl: 'https://api.themoviedb.org/3/search/movie',
            apiKey: 'e0c15850977d1058ff053d4726ac46f1',
            searchResults: []
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        const val = e.target.value;
        this.setState({
            searchTerm: val
        },
            // Call API on text change
            () => {
                if (val === "") {
                    this.setState({
                        searchResults: []
                    })
                } else {
                    axios
                        .get(
                            `${this.state.apiUrl}?api_key=${this.state.apiKey}&language=en-US&query=${val}`
                        )
                        .then(res => this.setState({ searchResults: res.data.results }))
                        .catch(err => console.log(err));
                }
            });
    };

    render() {
        const { searchResults } = this.state;

        // Map over search results & return data
        let searchResultsMapped = searchResults.map((item, index) => {
            return (
                <Col key={index}>
                    <SearchResult
                        id={item.id}
                        image={item.poster_path}
                        title={item.title}
                        description={item.overview}
                        releaseDate={item.release_date}
                    />
                </Col>
            );
        });

        return (
            <div className="search">
                <Grid fluid>
                    <Row>
                        <Col>
                            <form>
                                <Input
                                    placeholder="Search for a movie..."
                                    onKeyUp={this.handleTextChange}
                                />
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="search__results">
                                <Row>
                                    <Col>
                                        <div className="search__results-wrapper">
                                            <Row>
                                                {searchResultsMapped}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Search;