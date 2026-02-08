import { useEffect, useRef } from 'react';

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = document.documentElement.scrollHeight;

    canvas.width = width;
    canvas.height = height;

    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }

    const stars: Star[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random(),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      active: boolean;
    }

    const shootingStars: ShootingStar[] = [];

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.3,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        active: true,
      });
    }

    let lastShootingTime = 0;

    function animate(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // Draw stars
      for (const star of stars) {
        star.pulse += star.pulseSpeed;
        const o = (Math.sin(star.pulse) + 1) / 2 * 0.7 + 0.3;
        star.opacity = o;

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 200, 255, ${star.opacity})`;
        ctx!.fill();

        // Glow
        if (star.size > 1.5) {
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          const grad = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          grad.addColorStop(0, `rgba(108, 92, 231, ${star.opacity * 0.3})`);
          grad.addColorStop(1, 'transparent');
          ctx!.fillStyle = grad;
          ctx!.fill();
        }
      }

      // Shooting stars
      if (time - lastShootingTime > 3000 + Math.random() * 4000) {
        spawnShootingStar();
        lastShootingTime = time;
      }

      for (const ss of shootingStars) {
        if (!ss.active) continue;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.008;
        if (ss.opacity <= 0) { ss.active = false; continue; }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx!.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, `rgba(200, 200, 255, ${ss.opacity})`);

        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(ss.x, ss.y);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 2;
        ctx!.stroke();
      }

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
