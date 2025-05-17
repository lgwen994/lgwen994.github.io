import{n as i,j as e}from"./emotion-styled.browser.esm.CnbYx5VZ.js";import{S as m,L as u}from"./index.DS2C1oMh.js";import{C as f}from"./index.CBXJBe_K.js";import{k as h,T as a,M as r,c as p}from"./index.DhjzLMau.js";import{r as d}from"./index.DdRMN4IK.js";import"./index.CWXAi6RE.js";import"./index.CFA91VW3.js";import"./icon-bozinoff.CpD5gGdh.js";const b=h`
    from {
        transform: translateY(-50px);
        opacity: 0.01;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`,y=i.header`
    width: 100%;

    background: ${a.bgElement};

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    box-shadow: 0 0 10px rgb(123 123 123 / 10%);

    animation: ${b} 1s;
`,$=i(f)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
`,v=i.div`
    display: flex;
    gap: 50px;

    ${r.max("xl")} {
        gap: 20px;
    }
`,k=i.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${r.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${a.bgElement};
        height: 100vh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:o})=>o&&p`
                right: 0;
                transform: translateX(0);
            `};
    }
`,j=i.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${r.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${r.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${a.textDefault};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        line-height: 18px;
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.2s linear;

        ${r.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${a.tertiary};
            color: ${a.primary};
        }

        &.active:not(:hover) {
            background-color: ${a.tertiary};
            color: ${a.primary};
        }
        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${r.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`;i(m)`
    position: absolute;
    bottom: 0;
    background: ${a.bgElement};
    width: 100%;
    padding: 10px 0;
    margin: 0;
    left: 0;

    li {
        opacity: 1;
    }

    ${r.min("lg")} {
        display: none;
    }
`;const w=i.button`
    position: relative;
    z-index: 3;

    border: 1px solid ${a.tertiary};
    border-radius: 50%;
    background: ${a.bgElement};
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;

    width: 45px;
    height: 45px;

    ${r.min("lg")} {
        display: none;
    }
`,g=i.span`
    background: ${a.tertiary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${r.max("lg")} {
        height: 2px;
    }

    ${({$open:o})=>o?p`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:p`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:o})=>o?p`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:p`
                      top: calc(50% + 4px);
                  `}
    }
`,E=({state:o})=>{const{open:n,setOpen:l}=o,s=()=>{l(!n)},c=x=>{const t=x.target;!t.closest("nav")&&n&&t.tagName!=="BUTTON"&&l(!1)};return d.useEffect(()=>{if(n)return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[n]),e.jsxs(w,{$open:n,onClick:s,"aria-label":"Menu","aria-expanded":n,role:"button",tabIndex:0,children:[e.jsx(g,{$open:n}),e.jsx(g,{$open:n})]})},L=()=>{const[o,n]=d.useState(!1),[l,s]=d.useState("");d.useEffect(()=>{s(window.location.pathname);const t=()=>{s(window.location.pathname)};return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]);const c=t=>{s(t),n(!1)},x=[{path:"/",label:"Home"},{path:"/about",label:"About Me"},{path:"/offers",label:"Our offers"},{path:"/privacy",label:"Privacy Policy"},{path:"/contact",label:"Contact"}];return e.jsxs(v,{children:[e.jsx(k,{$isOpen:o,children:e.jsx(j,{children:x.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.path,className:l===t.path?"active":"",onClick:()=>c(t.path),children:t.label})},t.path))})}),e.jsx(E,{state:{open:o,setOpen:n}})]})},A=()=>e.jsx(y,{children:e.jsxs($,{children:[e.jsx(u,{}),e.jsx(L,{})]})});export{A as Header};
