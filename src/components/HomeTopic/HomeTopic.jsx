import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Text,
    Heading,
    Image,
} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import LogoTopic from '../../asset/loghi/Logo_piccolo_blu_trasparente.png';
import HeaderBlue from "../Typography/HeaderBlue";
import Paragraph from "../Typography/Paragraph";

function HomeTopic(
    {
        icon,
        title,
        content,
        showImgLogo,
    }
) {
    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                w={'33%'}
            >
                {showImgLogo &&
                    <Image
                        display={{
                            base: 'none',
                            md: 'block',
                        }}
                        src={LogoTopic}
                        mt={'-9rem'}
                        mb={'6rem'}
                        padding={
                            {
                                md: '0 2rem',
                                xl: '0 4rem',
                            }
                        }
                        zIndex={10}
                    />
                }
                <Box
                    borderRadius='full'
                    w={'12rem'}
                    h={'12rem'}
                    bg={'brand.primary'}
                    color={'brand.white'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                <span
                    style={{
                        fontSize: '6rem'
                    }}
                    className="material-symbols-outlined"
                >
                    {icon}
                </span>
                </Box>
                <Box
                    textAlign={{
                        base: 'left',
                        md: 'center',
                    }}
                >
                    <HeaderBlue
                        textProps={{
                            my: 6
                        }}
                        size={'4xl'}
                    >
                        {title}
                    </HeaderBlue>
                    <Paragraph
                        textProps={{
                            px: {
                                base: 0,
                                md: 10,
                            },
                            my: {
                                base: 8,
                                md: 0,
                            }
                        }}
                    >
                        {content}
                    </Paragraph>
                </Box>
            </Box>
        </>
    )
}

HomeTopic.propTypes = {}

HomeTopic.defaultProps = {}

export default HomeTopic;
