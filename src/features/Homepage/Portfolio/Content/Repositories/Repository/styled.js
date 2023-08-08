import styled, { css } from "styled-components";
import { ReactComponent as Play } from "../../../../../../icons/play.svg";
import { ReactComponent as Code } from "../../../../../../icons/code.svg";
import { ReactComponent as Earth } from "../../../../../../icons/earth.svg";

export const StyledRepository = styled.div`
  width: calc((100% / 3) - (((3 - 1) / 3) * 16px));

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: calc((100% / 2) - (((2 - 1) / 2) * 16px));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 100%;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 25px;
  height: calc(100% - 176px);
  margin-top: 16px;
  background-color: ${({ theme }) => theme.tile.background};
  border-radius: 8px;
  color: ${({ theme }) => theme.textAlternative};
  font-size: 14px;
  transition: border-color ${({ theme }) => theme.themeAnimation},
    background-color ${({ theme }) => theme.themeAnimation},
    color ${({ theme }) => theme.themeAnimation};
  border: 6px solid ${({ theme }) => theme.tile.border};

  &:hover {
    border-color: ${({ theme }) => theme.tile.hover};
    transition: border-color ${({ theme }) => theme.animation},
      background-color ${({ theme }) => theme.themeAnimation},
      color ${({ theme }) => theme.themeAnimation};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    min-height: auto;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.bold};
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 16px;
`;

export const ThumbnailImage = styled.img`
  display: block;
  object-fit: cover;
  height: 160px;
  width: 100%;
  border-radius: 8px;
  transition: transform ${({ theme }) => theme.animation},
    filter ${({ theme }) => theme.animation};

  ${({ details }) =>
    details &&
    css`
      opacity: 0.5;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
    height: auto;
    aspect-ratio: 3 / 1;
  }
`;

export const ThumbnailImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    45deg,
    #444cf7 0,
    #444cf7 1px,
    #e5e5f7 0,
    #e5e5f7 50%
  );
`;

export const PlayIcon = styled(Play)`
  width: 24px;
  height: auto;
`;

export const EarthIcon = styled(Earth)`
  width: 24px;
  height: auto;
`;

export const CodeIcon = styled(Code)`
  margin-top: -6px;
  width: 30px;
  height: auto;
  position: relative;
  top: 3px;
`;
