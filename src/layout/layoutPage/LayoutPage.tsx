import { Container, Header, Content } from "./LayoutPage.style";

type Props = {
  children?: JSX.Element;
};

export const LayoutPage: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>{/* <HeaderLayout /> */}</Header>
      <Content>Сокращатель</Content>
      {children}
      <div className="exapmle">wow!</div>
    </Container>
  );
};
