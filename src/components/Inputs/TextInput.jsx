import * as React from 'react';
import PropTypes from 'prop-types';
import {
    FormControl, FormLabel, Input,
    InputGroup, InputLeftElement, FormHelperText,

} from "@chakra-ui/react";
import {useState, useEffect, useRef} from "react";

function TextInput(
    {
        id,
        label,
        value,
        setValue,
        validityCheck,
        errorMsg,
        type='text',
    }
) {
    const [error, setError] = useState(false);



    return (
        <FormControl
            id={id}
            as='fieldset'
            isInvalid={error}
        >
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
                    value={value}
                    onBlur={_ => {
                        if (!!validityCheck) {
                            setError(
                                !validityCheck(value)
                            )
                        }
                    }}
                    onChange={(event) => {
                        const {
                            value
                        } = event.target;
                        if (setValue) setValue(value)
                    }}
                    type={type}
                />

            </InputGroup>
            {
                error &&
                <FormHelperText
                    color={'red.500'}
                    fontSize={'.8rem'}
                >
                    {errorMsg}
                </FormHelperText>
            }

        </FormControl>
    )
}

TextInput.propTypes = {}

TextInput.defaultProps = {}

export default TextInput;
