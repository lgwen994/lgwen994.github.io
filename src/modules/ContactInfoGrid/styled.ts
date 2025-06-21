import styled from "@emotion/styled";


export const ContactGridStyled = styled.section`
  padding: 2rem 0;
`;

export const ContactGridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  flex: 1 1 22%;
  text-align: center;
  min-width: 150px;
`;

export const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Label = styled.h4`
  font-size: 1rem;
  margin: 0;
`;


export const LinkLabel = styled("a")`

display: block;
text-align: center;
font-weight:700;
  font-size: 1rem;
  margin: 0;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;






