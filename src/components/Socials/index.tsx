import { type FC } from "react";
import * as S from "./styled";
import { Icon } from "@static/icons";

export const Socials: FC = ({ ...rest }) => {
    return (
        <S.SocialsStyled {...rest}>
            <S.SocialsList>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.facebook.com/share/18WdPVtM99/?mibextid=qi2Omg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="facebook" alt="facebook" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.linkedin.com/in/annie-qian-21353635b/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="linkedin" alt="linkedin" />
                    </S.SocialsLink>
                </S.SocialsListItem>
                <S.SocialsListItem>
                    <S.SocialsLink
                        href="https://www.xiaohongshu.com/user/profile/5ad0abd64eacab0f494b71e3?xsec_token=YB_HYwzrPyFTnR_AIYa-azqzB3z2ucVrXJerD1i1qv-I0%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=5ad0abd64eacab0f494b71e3&apptime=1748313279&share_id=3ee5e0fe228b46f9abbef0a1d404c807&share_channel=copy_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon iconData="xiaohongshu" alt="rednote" />
                    </S.SocialsLink>
                </S.SocialsListItem>
            </S.SocialsList>
        </S.SocialsStyled>
    );
};
