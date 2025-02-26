import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const BezierCurveAnimation = () => {
  const props = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { duration: 3000 },
    loop: true,
  });

  return (
    <svg width="100%" height="200" viewBox="0 0 200 200">
      <animated.path
        d={props.x.to(x => `M10 80 C 40 ${x}, 65 ${x}, 95 80 S 150 ${x}, 180 80`)}
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BezierCurveAnimation;
