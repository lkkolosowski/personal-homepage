import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 32px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.semiTransparentIron};
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
`;

export const SectionBody = styled.div`
  min-height: 56px;
`;
