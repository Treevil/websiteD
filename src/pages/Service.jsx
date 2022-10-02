import * as React from 'react';
import PropTypes from 'prop-types';
import PagesHero from "../components/PagesHero/PagesHero";
import HeroImg from "../asset/immagini/About1Hero.jpg"
import {Image} from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";

function Service(
    {}
) {
    return (
        <div className={'about1-page'}>
            <PagesHero
                bgImage={HeroImg}
            />
            <ProductGrid />
        </div>
    )
}

Service.propTypes = {}

Service.defaultProps = {}

export default Service;
