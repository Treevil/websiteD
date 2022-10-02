import * as React from 'react';
import PropTypes from 'prop-types';
import './HomeLogo.scss'
function HomeLogo(
    {}
) {
    return (
        <div className={'logoContainer'}>
            <span className={'firstLine'}>25</span>
            <span className={'secondLine'}>Years</span>
        </div>
    )
}

HomeLogo.propTypes = {}

HomeLogo.defaultProps = {}

export default HomeLogo;
