import { RotatingLines } from 'react-loader-spinner';
import {LoadContainer, Text} from './styled'

const Loader = () => {
  return (
    <LoadContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <Text>Loading...</Text>
    </LoadContainer>
  );
};

export default Loader;