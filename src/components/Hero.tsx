import React, { useEffect, useRef } from 'react';
import './Hero.css'
// import '../styles/Hero.css';

const Hero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.width || 0);
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;

                const colors = [
                    'rgba(102, 0, 255, 0.5)',
                    'rgba(255, 51, 102, 0.5)',
                    'rgba(0, 238, 255, 0.5)'
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (canvas && (this.x > canvas.width || this.x < 0)) {
                    this.speedX = -this.speedX;
                }

                if (canvas && (this.y > canvas.height || this.y < 0)) {
                    this.speedY = -this.speedY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!ctx) return;
            if (canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(102, 0, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="home" className="hero">
            <canvas ref={canvasRef} className="hero-particles"></canvas>
            <div className="hero-content">
                <h1 className="hero-title">
                    Game <span className="text-gradient">Developer</span><br />
                    Portfolio
                </h1>
                <p className="hero-subtitle">Creating immersive gaming experiences</p>
                <div className="hero-buttons">
                    <a href="#projects" className="button button-primary">View Projects</a>
                    <a href="#contact" className="button button-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;