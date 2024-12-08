// import './directoryItem.scss'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directoryItem.style";
import { useNavigate } from "react-router-dom";

type Category = {
  title: string;
  imageUrl: string;
  route: string;
};

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
