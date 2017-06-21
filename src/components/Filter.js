/**
 * Created by sambaeck on 21/06/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

export class Filter extends React.Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        selectTab: PropTypes.func.isRequired
    }


    render() {
        return (
            <li key={this.props.category} onClick={() => this.props.selectTab(this.props.category)}>
                <a className={this.props.selected ? 'selected' : ''}>
                    {this.props.category}
                </a>
            </li>
        )
    }
}