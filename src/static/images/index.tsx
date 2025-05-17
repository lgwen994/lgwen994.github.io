import { type FC } from "react";
import HeroImg from "./hero-img.webp";
import Chart from "./chart.webp";
import Logo from "./logo.webp";
import PreviewPng from "./preview.webp";
import AqImg from "./aq-img.webp";
import Banks from "./banks.webp";

import BridgeLoans from "./bridge-loans.png";
import ConstructionLoan from "./construction-loan.png";
import FirstHomeBuyer from "./first-home-buyer.png";
import Refinance from "./refinance.png";
import Investment from "./investment-property.png";
import SplitLoan from "./split-loan.png";
import Referral from "./referral.png";

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    chart: Chart,
    logo: Logo,
    aqImg: AqImg,
    banks: Banks,
    bridgeLoans: BridgeLoans,
    constructionLoan: ConstructionLoan,
    firstHomeBuyer: FirstHomeBuyer,
    refinance: Refinance,
    investment: Investment,
    splitLoan: SplitLoan,
    referral: Referral
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export { PreviewPng };
