import * as React from 'react';
import PropTypes from 'prop-types';
import { useRouteError } from "react-router-dom";

function Page404(
    {}
) {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

Page404.propTypes = {}

Page404.defaultProps = {}

export default Page404;
