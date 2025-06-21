
import { Container } from "@components/Container";
import * as S from "./styled";
import { type FC } from "react";
import { FadeIn } from "@utils/animations/FadeIn";
import { icons } from "@static/icons";
import { Icon } from "@static/icons";
type ContactItem = {
  icon: keyof typeof icons;
  label: string;
  href?: string;

};



const contactItems: ContactItem[] = [
  { icon: "email", label: "annie@bml.net.nz" },
  { icon: "phone", label: "+022 678 6088" },
  { icon: "document", label: "Privacy Policy", href: "/policy/" },
  { icon: "document", label: "Disclosure", href: "/disclosure/" },
];



export const ContactInfoGrid: FC = () => {
  return (
    <S.ContactGridStyled>
      <Container>
        <S.ContactGridWrapper>
          {contactItems.map((item, index) => (
            <FadeIn key={index} delay={`0.${index}`}>
              <S.ContactItem>
                <Icon iconData={item.icon} alt={item.label} />
                {item.href ? (
                  <S.LinkLabel href={item.href}>{item.label}</S.LinkLabel>
                ) : (
                  <S.Label>{item.label}</S.Label>
                )}
              </S.ContactItem>
            </FadeIn>
          ))}
        </S.ContactGridWrapper>
      </Container>
    </S.ContactGridStyled>
  );
};
