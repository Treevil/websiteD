import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Heading,
} from "@chakra-ui/react";

function HeaderBlue(
    {
        size = '2xl',
        children,
        textProps,
    }
) {
    return (
        <Heading
            fontFamily={"'Bebas Neue', cursive"}
            color={'brand.blue'}
            textTransform={'uppercase'}
            fontSize={size}
            letterSpacing={'2px'}
            lineHeight={'1'}
            {...textProps}
        >
            {children}
        </Heading>
    )
}

HeaderBlue.propTypes = {}

HeaderBlue.defaultProps = {}

export default HeaderBlue;
