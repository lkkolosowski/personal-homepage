import styled from "styled-components";
import { ReactComponent as Bike } from "./bike.svg";

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin-top: 64px;
  margin-bottom: 48px;
  text-align: center;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

export const BikeIcon = styled(Bike)`
  width: 100%;
  max-width: 400px;
  height: auto;

  .bike__body,
  .bike__front,
  .bike__handlebars,
  .bike__pedals,
  .bike__pedals-spin,
  .bike__seat,
  .bike__spokes,
  .bike__spokes-spin,
  .bike__tire {
    animation: bikeBody 3s ease-in-out forwards;
    stroke: ${({ theme }) => theme.primary};
    transition: stroke 0.3s;
  }
  .bike__front {
    animation-name: bikeFront;
  }
  .bike__handlebars {
    animation-name: bikeHandlebars;
  }
  .bike__pedals {
    animation-name: bikePedals;
  }
  .bike__pedals-spin {
    animation-name: bikePedalsSpin;
  }
  .bike__seat {
    animation-name: bikeSeat;
  }
  .bike__spokes,
  .bike__tire {
    stroke: currentColor;
  }
  .bike__spokes {
    animation-name: bikeSpokes;
  }
  .bike__spokes-spin {
    animation-name: bikeSpokesSpin;
  }
  .bike__tire {
    animation-name: bikeTire;
  }

  /* Animations */
  @keyframes bikeBody {
    from {
      stroke-dashoffset: 79;
    }
    33%,
    67% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -79;
    }
  }
  @keyframes bikeFront {
    from {
      stroke-dashoffset: 19;
    }
    33%,
    67% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -19;
    }
  }
  @keyframes bikeHandlebars {
    from {
      stroke-dashoffset: 10;
    }
    33%,
    67% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -10;
    }
  }
  @keyframes bikePedals {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: -25.133;
    }
    33%,
    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: -21.991;
    }
    to {
      stroke-dashoffset: -25.133;
    }
  }
  @keyframes bikePedalsSpin {
    from {
      transform: rotate(0.1875turn);
    }
    to {
      transform: rotate(3.1875turn);
    }
  }
  @keyframes bikeSeat {
    from {
      stroke-dashoffset: 5;
    }
    33%,
    67% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -5;
    }
  }
  @keyframes bikeSpokes {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: -31.416;
    }
    33%,
    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: -23.562;
    }
    to {
      stroke-dashoffset: -31.416;
    }
  }
  @keyframes bikeSpokesSpin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(3turn);
    }
  }
  @keyframes bikeTire {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: 56.549;
      transform: rotate(0);
    }
    33% {
      stroke-dashoffset: 0;
      transform: rotate(0.33turn);
    }
    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: 0;
      transform: rotate(0.67turn);
    }
    to {
      stroke-dashoffset: -56.549;
      transform: rotate(1turn);
    }
  }
`;
