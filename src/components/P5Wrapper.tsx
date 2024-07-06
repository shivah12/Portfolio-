import React, { useRef, useEffect } from 'react';

interface P5WrapperProps {
  sketch: (p: any) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: any | null = null;
    if (wrapperRef.current) {
      // Dynamically import p5.js only on the client side
      import('p5').then((p5Module) => {
        p5Instance = new p5Module.default(sketch, wrapperRef.current!);
      });
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
