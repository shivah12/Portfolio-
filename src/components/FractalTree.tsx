import React from 'react';
import P5Wrapper from './P5Wrapper';


let angle: number;

const Sketch = (p5: any) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  const branch = (len: number) => {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  };
};

const FractalTree: React.FC = () => (
  <div id="fractal-tree">
    <P5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
