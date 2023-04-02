import { Tile } from "../Tile";
import {
  StyledPortfolio,
  Repositories,
  Header,
  Icon,
  Title,
  Subtitle,
  Description,
  List,
  Item,
  Link,
} from "./styled";

export const Portfolio = () => (
  <StyledPortfolio>
    <Header>
      <Icon />
      <Title>Portfolio</Title>
      <Subtitle>My recent projects</Subtitle>
    </Header>
    <Repositories>
      <Tile
        title={<Link href={"test"}>Movies Browser</Link>}
        content={
          <>
            <Description>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g.
              website where you can search.
            </Description>
            <List>
              <Item>
                <span>Demo:</span>
                <span>
                  <Link href={"test"}>https://link.demo.com</Link>
                </span>
              </Item>
              <Item>
                <span>Code:</span>
                <span>
                  <Link href={"test"}>https://link.code.com</Link>
                </span>
              </Item>
            </List>
          </>
        }
      />
      <Tile
        title={<Link href={"test"}>Movies Browser</Link>}
        content={
          <>
            <Description>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g.
              website where you can search.
            </Description>
            <List>
              <Item>
                <span>Demo:</span>
                <span>
                  <Link href={"test"}>https://link.demo.com</Link>
                </span>
              </Item>
              <Item>
                <span>Code:</span>
                <span>
                  <Link href={"test"}>https://link.code.com</Link>
                </span>
              </Item>
            </List>
          </>
        }
      />
      <Tile
        title={<Link href={"test"}>Movies Browser</Link>}
        content={
          <>
            <Description>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g.
              website where you can search.
            </Description>
            <List>
              <Item>
                <span>Demo:</span>
                <span>
                  <Link href={"test"}>https://link.demo.com</Link>
                </span>
              </Item>
              <Item>
                <span>Code:</span>
                <span>
                  <Link href={"test"}>https://link.code.com</Link>
                </span>
              </Item>
            </List>
          </>
        }
      />
      <Tile
        title={<Link href={"test"}>Movies Browser</Link>}
        content={
          <>
            <Description>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g.
              website where you can search.
            </Description>
            <List>
              <Item>
                <span>Demo:</span>
                <span>
                  <Link href={"test"}>https://link.demo.com</Link>
                </span>
              </Item>
              <Item>
                <span>Code:</span>
                <span>
                  <Link href={"test"}>https://link.code.com</Link>
                </span>
              </Item>
            </List>
          </>
        }
      />
    </Repositories>
  </StyledPortfolio>
);
