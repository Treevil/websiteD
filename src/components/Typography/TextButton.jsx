import * as React from 'react';
import PropTypes from 'prop-types';
import {Heading} from "@chakra-ui/react";

function TextButton(
    {
        children,
        textProps,
        onClick,
    }
) {
    return (
        <Heading
            fontFamily={"\"B612\", cursive"}
            color={'brand.blue'}
            textTransform={'uppercase'}
            fontSize={'1rem'}
            letterSpacing={'2px'}
            lineHeight={'1'}
            {...textProps}
            display={'flex'}
            alignItems={'center'}
            fontWeight={'bold'}
            onClick={onClick?? null}
        >
            {children}
            <span className="material-symbols-outlined" style={{fontSize: '2rem'}}>navigate_next</span>
        </Heading>
    )
}

TextButton.propTypes = {}

TextButton.defaultProps = {}

export default TextButton;
