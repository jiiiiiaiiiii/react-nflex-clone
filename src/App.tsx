import styled from 'styled-components';
import {
  motion,
  AnimatePresence
} from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
}

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(prev => !prev);
  }

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing 
        ? <Box 
            variants={boxVariants} 
            initial='initial'   // 초기상태
            animate='visible'   // 초기 -> 등장
            exit='leaving' />   // exit: element가 '사라질 때'의 animtaion
        : null}
      </AnimatePresence>
    </Wrapper>
  );   
}

export default App;
