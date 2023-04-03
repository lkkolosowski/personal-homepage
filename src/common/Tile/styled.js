import styled from "styled-components";

export const StyledTile = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.thick};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.semiTransparentIron};
  padding: 50px;
  transition: border-color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 24px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.semiTransparentScienceBlue};
  }
`;

export const TileBody = styled.div`
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
  }
`;
