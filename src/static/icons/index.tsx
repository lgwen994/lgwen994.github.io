
import { type FC } from "react";

import IconFacebook from "./icon-facebook.svg";
import IconFacebookC from "./icon-facebook-color.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconXiaohongshu from "./icon-xiaohongshu.svg";
import IconXiaohongshuEn from "./icon-xiaohongshu-en.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconLinkedInC from "./icon-linkedin-color.svg";
import IconArrowDown from "./icon-arrow-down.svg";
import IconArrowCircle from "./icon-arrow-circle.svg";

import IconAstro from "./icon-astro.svg";
import IconSplitLoan from "./icon-split-loan.svg";
import IconBozinoff from "./icon-bozinoff.svg";
import IconPhone from "./icon-phone.svg";
import IconEmail from "./icon-email.svg";
import IconDocument from "./icon-document.svg";

export const icons = {
    arrowDown: IconArrowDown,
    arrowCircle: IconArrowCircle,
    facebookC: IconFacebookC,
    facebook: IconFacebook,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedIn,
    linkedinC: IconLinkedInC,
    xiaohongshu: IconXiaohongshu,
    xiaohongshuEn: IconXiaohongshuEn,
    astro: IconAstro,
    splitLoan: IconSplitLoan,
    bozinoff: IconBozinoff,
    phone: IconPhone,
    email: IconEmail,
    document: IconDocument
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
        />
    );
};

export { IconAstro, IconSplitLoan, IconFacebook, IconInstagram, IconXiaohongshu, IconTwitter, IconLinkedIn, IconBozinoff };
