import React, { useRef, useEffect } from 'react';
import p5 from "p5";

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: p5 | null = null;
    if (wrapperRef.current) {
      p5Instance = new p5(sketch, wrapperRef.current);
    }
    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, [sketch]);

  return <div ref={wrapperRef}></div>;
};

export default P5Wrapper;
