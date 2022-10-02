import * as React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl, FormLabel, Input,
    InputGroup, InputLeftElement
} from "@chakra-ui/react";

function TextInput(
    {
        id,
        label,
        setValue,
    }
) {

    return (
        <FormControl id={id}>
            <FormLabel
                fontFamily={'\'Roboto\', sans-serif'}
                margin={'0.2rem'}
            >
                {label}
            </FormLabel>
            <InputGroup
                background={"brand.bgInput"}
                border={"0px solid transparent"}
            >
                <Input
                    type="text"
                    size="md"
                    onChange={(event) => {
                        const {
                            value
                        } = event.target;
                        if (setValue) setValue(value)
                    }}
                />
            </InputGroup>
        </FormControl>
    )
}

TextInput.propTypes = {}

TextInput.defaultProps = {}

export default TextInput;
