import { Logo } from "@components/Logo";
import * as S from "./styled";
import { Navigation } from "@components/Navigation";
import type { FC } from "react";

export const Header: FC = () => {
    return (
        <S.HeaderStyled>
            <S.ContainerStyled>
                <div style={{ display: 'inline-flex' }}>
                    <Logo />
                    <div style={{ display: 'inline-grid', marginLeft: '10px' }}>
                        <span style={{ textIndent: '1.7em', whiteSpace: 'nowrap' }}><b>Annie Qian</b></span>
                        <span style={{ whiteSpace: 'nowrap' }}>📞 022 678 6088</span>
                        <span style={{ whiteSpace: 'nowrap' }}>📧 annie@bml.net.nz</span>
                    </div>
                </div>
                <Navigation />
            </S.ContainerStyled>
        </S.HeaderStyled >
    );
};
