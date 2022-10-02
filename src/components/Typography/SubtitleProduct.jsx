import * as React from 'react';
import PropTypes from 'prop-types';
import {Text} from "@chakra-ui/react";

function SubtitleProduct(
    {
        color = 'brand.primary',
        children,
        textProps,
    }
) {
    return (
        <Text
            fontFamily={'\'B612\', sans-serif'}
            fontWeight={'bold'}
            {...textProps}
        >
            {children}
        </Text>
    )
}

SubtitleProduct.propTypes = {}

SubtitleProduct.defaultProps = {}

export default SubtitleProduct;
