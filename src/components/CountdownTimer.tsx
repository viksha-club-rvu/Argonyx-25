import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set hackathon date - Feb 15, 2025
  const targetDate = new Date('2025-02-15T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBoxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeBoxes.map((box, index) => (
        <div
          key={box.label}
          className="glass-card p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px] hover-glow animate-pulse-glow"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-2xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
            {box.value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
            {box.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;