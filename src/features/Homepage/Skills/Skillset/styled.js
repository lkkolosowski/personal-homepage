import styled from "styled-components";

export const SectionBody = styled.div`
  color: ${({ theme }) => theme.textAlternative};
  transition: color ${({ theme }) => theme.themeAnimation};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
`;

export const Card = styled.li`
  perspective: 800px;
  transition: ease-out 0.6s;
  cursor: default;

  &:hover > div {
    transition-delay: 0.15s;
    transform: rotateX(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const CardInner = styled.div`
  text-transform: uppercase;
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: ease-out 0.6s;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.tile.border} 0 0 0 1px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  padding: 11px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 11px 32px;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  transform: rotateX(180deg);
`;

export const CardBodyInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.white}80;
  display: flex;
  border-radius: 4px;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 28px;
  height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 26px;
    height: 26px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
`;
