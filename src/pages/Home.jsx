import * as React from 'react';
import HomeTopic from "../components/HomeTopic/HomeTopic";
import HeroHome from "../components/HeroHome";
import {Container, Stack} from "@chakra-ui/react";
import HomeMiddleSection from "../components/HomeMiddleSection/HomeMiddleSection";
import {
    homeCards,
    middleSectionLinks,
    middleSectionText,
} from "../Content";

function Home() {
    return (
        <div className={'home--page'}>
            <HeroHome/>
            <Container
                maxW='7xl'
                mt={20}
                mb={'7rem'}
            >
                <Stack
                    flexDirection={{
                        base: 'column',
                        md: 'row',
                    }}

                    alignItems={'center'}
                >
                    {
                        homeCards.map((topic,index) => {
                            return (
                                <HomeTopic
                                    key={index}
                                    icon={topic.icon}
                                    title={topic.title}
                                    content={topic.content}
                                    showImgLogo={index === 1}
                                />
                            )
                        })
                    }
                </Stack>
            </Container>
            <HomeMiddleSection
                text={middleSectionText}
                links={middleSectionLinks}
            />
        </div>
    )
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home;
