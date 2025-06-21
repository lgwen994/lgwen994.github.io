import React, { type FC } from "react";
import * as S from "./styled";
import { Icon, icons } from "@static/icons";

type TextBoxLinkProps = {
    href?: string;
    target?: string;
};

export type TextBoxProps = {
    children: string | TrustedHTML;
    variant?: "normal" | "background-text";
    bgText?: string;
    boxAsLink?: boolean;
    iconName?: keyof typeof icons;
    iconAlt?: string;
} & TextBoxLinkProps;

export const TextBox: FC<TextBoxProps> = ({
    children,
    variant,
    bgText,
    boxAsLink,
    iconName = "arrowCircle",
    iconAlt = "arrow",
    ...rest
}) => {
    if (!children) return null;

    const TextBoxComponent = boxAsLink ? S.TextBoxLinkStyled : S.TextBotStyed;

    return (
        <TextBoxComponent $variant={variant} {...rest}>
            {variant === "background-text" && bgText && (
                <S.TextBotBgText>{bgText}</S.TextBotBgText>
            )}
            {boxAsLink && (
                <S.LinkIconFigure>
                    <S.LinkIcon iconData={iconName} alt={iconAlt} />
                </S.LinkIconFigure>
            )}
            <S.TextBotTextWrapper
                dangerouslySetInnerHTML={{ __html: children }}
            />

        </TextBoxComponent>
    );
};