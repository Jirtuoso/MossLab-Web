import React, { useRef, useEffect } from 'react';

const NatureLogo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let time = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Recursive Tree Logic
    const drawTree = (startX: number, startY: number, len: number, angle: number, branchWidth: number, depth: number) => {
      ctx.beginPath();
      ctx.save();
      
      ctx.translate(startX, startY);
      ctx.rotate(angle * Math.PI/180);
      
      // Tapering width
      ctx.lineWidth = branchWidth;
      // Organic color: Darker at bottom, lighter at tips
      const r = 19 + depth * 5; 
      const g = 42 + depth * 10; 
      const b = 19 + depth * 2;
      ctx.strokeStyle = `rgb(${r},${g},${b})`;
      
      if (depth > 8) {
        ctx.strokeStyle = '#859F3D'; // Leaf color at tips
      }

      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      if (len < 10) {
        // Draw a leaf at the end
        ctx.beginPath();
        ctx.fillStyle = '#859F3D';
        ctx.arc(0, -len, 3 + Math.sin(time * 0.05 + depth) * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // Influence of mouse on angle (Wind)
      // Calculate normalized direction to mouse
      const dx = mouseX - (startX + canvas.offsetLeft);
      const dy = mouseY - (startY + canvas.offsetTop);
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      // The closer the mouse, the more it pushes/pulls the branches
      const mouseInfluence = Math.max(-20, Math.min(20, (dx / 50)));
      
      // Natural sway
      const sway = Math.sin(time * 0.002 + depth) * 5;

      drawTree(0, -len, len * 0.75, -25 + sway + (mouseInfluence * 0.5), branchWidth * 0.7, depth + 1);
      drawTree(0, -len, len * 0.75, 25 + sway + (mouseInfluence * 0.5), branchWidth * 0.7, depth + 1);
      
      ctx.restore();
    };

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Start tree from bottom center
      const centerX = canvas.width / 2;
      const bottomY = canvas.height; // Start a bit off screen if needed, or right at bottom
      
      // Main trunk
      drawTree(centerX, bottomY - 50, 120, 0, 10, 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-[500px] md:h-[600px] pointer-events-none mix-blend-multiply opacity-80"
    />
  );
};

export default NatureLogo;
