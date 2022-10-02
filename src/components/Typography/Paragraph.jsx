import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Text
} from "@chakra-ui/react";

function Paragraph(
    {
        color = 'brand.primary',
        children,
        textProps,
    }
) {
    return (
        <Text
            fontFamily={'\'Roboto\', sans-serif'}
            color={color}
            {...textProps}
        >
            {children}
        </Text>
    )
}

Paragraph.propTypes = {
    dark: PropTypes.bool,
    children: PropTypes.node,
}


export default Paragraph;
