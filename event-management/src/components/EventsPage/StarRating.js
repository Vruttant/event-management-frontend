import { Star, StarFill } from "react-bootstrap-icons";
const StarRating = ({ activeStarCount }) => {
  const stars = [];
  for (let i = 0; i < activeStarCount; i++) {
    stars.push(<StarFill />);
  }
  for (let i = 0; i < 5 - activeStarCount; i++) {
    stars.push(<Star />);
  }
  return <div>{stars}</div>;
};

export default StarRating;
