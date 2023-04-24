import styled from "styled-components";

export const SectionBody = styled.div`
  color: ${({ theme }) => theme.textAlternative};
  transition: color ${({ theme }) => theme.themeAnimation};
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const Card = styled.li`
  perspective: 800px;
  cursor: default;

  &:hover > div {
    transform: rotateX(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const CardFront = styled.div`
  text-transform: uppercase;
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition-property: transform;
  transition-duration: 0.5s;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
`;

export const CardFrontInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.skills.front};
  box-shadow: ${({ theme }) => theme.tile.border} 0 0 0 1px;
  display: flex;
  border-radius: 4px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation},
    box-shadow ${({ theme }) => theme.themeAnimation};
  padding: 11px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 11px 32px;
  }
`;

export const CardBack = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  transform: rotateX(180deg);
`;

export const CardBackInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.skills.back};
  border: 1px solid ${({ theme }) => theme.tile.border};
  display: flex;
  border-radius: 4px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ theme }) => theme.themeAnimation};
  padding: 11px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 11px 16px;
  }
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 28px;
  height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 26px;
    height: 26px;
  }
`;

export const styledRating = (Rating) => styled(Rating)`
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 18px;
  }
`;
