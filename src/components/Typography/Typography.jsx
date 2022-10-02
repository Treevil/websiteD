import * as React from 'react';
import PropTypes from 'prop-types';
import "./Typhography.scss"

function Typography(
    {
        type,
        text,
        darkBg,
    }
) {
    let tag;

    switch (type) {

        case 'h1':
            tag = <h1 className={`title1 ${darkBg && 'darkBg'}`}>
                {text}
            </h1>
            break;
        case 'h2':
            tag = <h2 className={`title1 ${darkBg && 'darkBg'}`}>
                {text}
            </h2>
            break;
        case 'h3':
            tag = <h3 className={`title1 ${darkBg && 'darkBg'}`}>
                {text}
            </h3>
            break;
        default:
        case 'p':
            tag = <p className={`paragraph ${darkBg && 'darkBg'}`}>
                {text}
            </p>
            break;
    }

    return (
        <>
            {tag}
        </>
    )
}

Typography.propTypes = {
    /**
     * What kind of text
     */
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'p',]),
    /**
     * Text content
     */
    text: PropTypes.string,
    /**
     * Is this the principal call to action on the page?
     */
    darkBg: PropTypes.bool,
}

Typography.defaultProps = {
    type: 'p',
    text: 'lorem ipsum',
    darkBg: false,
}

export default Typography;
