import { loremIpsum } from "lorem-ipsum";

function Lorem({ count }) {
  return <>{loremIpsum({ count })}</>;
}

export default Lorem;
