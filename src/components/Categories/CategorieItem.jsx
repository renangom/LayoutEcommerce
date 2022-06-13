import { Container1, Info, Title, Image, Button } from "./Categories.styled";

const CategoryItem = ({ item }) => {
  return (
    <Container1>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button> Compre Agora </Button>
      </Info>
    </Container1>
  );
};

export default CategoryItem;
