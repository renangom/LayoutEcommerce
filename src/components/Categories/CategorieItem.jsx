import { Container1, Info, Title, Image, Button } from "./Categories.styled";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container1>
      <Link to={`/produtos/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button> Compre Agora </Button>
        </Info>
      </Link>
    </Container1>
  );
};

export default CategoryItem;
