import * as S from "./styled";
import { useState, useEffect, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        setActiveLink(window.location.pathname);
        
        const handlePopState = () => {
            setActiveLink(window.location.pathname);
        };
        
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleNavigation = (path: string) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about/", label: "About Me" },
        { path: "/services/", label: "Services" },
        { path: "/policy/", label: "Privacy Policy" },
        { path: "/disclosure/", label: "Disclosure" },
        { path: "/contact/", label: "Contact" },
    ];

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                className={activeLink === item.path ? "active" : ""}
                                onClick={() => handleNavigation(item.path)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};