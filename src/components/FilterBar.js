/**
 * Created by sambaeck on 21/06/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Filter} from './Filter';

export class FilterBar extends React.Component {

    static propTypes = {
        filters: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="tab-filter-wrapper">
                <div className="tab-filter">

                    <ul>

                        <li className="placeholder">
                            <a data-type="all" href="#0">All</a>
                        </li>

                        {this.props.filters.map(filter =>
                            <Filter key={filter.category} category={filter.category} selected={filter.selected}
                                    selectTab={this.props.selectTab}/>
                        )}

                        <li className="counter">
                            <a>42</a>
                        </li>

                    </ul>

                </div>
            </div>
        )
    }
}