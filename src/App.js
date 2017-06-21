import React, {Component} from 'react';
import logo from './images/logo.svg';
import movies from './mocks/movies.json';
import filters from './mocks/filters';
import genres from './mocks/genres.json';
import './css/Header.css';
import {Movie} from './components/Movie';
import {Header} from './components/Header';
import {FilterBar} from './components/FilterBar';
import {SideBar} from './components/SideBar';

export class App extends Component {
    state = {
        movies,
        filters,
        sideBarOpened: false
    };


    selectTab = (category) => {
        // We need to update the `selected` property of the clicked category to be true.
        this.setState({
            filters: this.state.filters.map((filter) => {
                    if (filter.category === category) {
                        filter.selected = true;
                    }
                    else {
                        filter.selected = false;
                    }
                }
            ),
            movies: movies.filter((movie) => {
                this.findGenreId(category);
            })
        });


        // We should also filter the movies which are passed to the movie list
        console.log(category);
    };

    findGenreId = (category) => {
        let genreResult = genres.filter((genre) => {
            if(genre.category === category){
                return genre.id;
            }
        });
        console.log(genreResult);
        return genreResult;
    };

    openSideBar = () => {
        // We need to toggle the state of the sidebar here to make sure it is in an open state
        this.setState({
            sideBarOpened: true
        })
    };

    closeSideBar = () => {
        this.setState({
            sideBarOpened: false
        })
    };

    render() {
        return (
            <div>
                <Header/>

                <main className="main-content">

                    <FilterBar filters={this.state.filters} selectTab={this.selectTab}/>

                    {/*If the sidebar is open you need to add the css class filter-is-visible to the div below*/}
                    <section className={`gallery ${this.state.sideBarOpened ? "filter-is-visible" : ""}`}>
                        {this.state.movies.map(movie =>
                            <Movie key={movie.id} data={movie}/>
                        )}
                    </section>

                    <SideBar sideBarOpened={this.state.sideBarOpened} openSideBar={this.openSideBar}
                             closeSideBar={this.closeSideBar}/>


                </main>
            </div>
        )
            ;
    }
}
