const scheduleData = [
  {
    day: "Day 1 - October 10, 2025 (Friday)",
    events: [
      { time: "15:00", title: "Reporting Time", type: "general" },
      { time: "15:30", title: "Registration & Tag Distribution", type: "general" },
      { time: "16:00", title: "Hackathon Kick-Off", type: "hack" },
      { time: "18:00", title: "Tea/Coffee Break", type: "break" },
      { time: "20:45", title: "Dinner Break", type: "break" },
      { time: "21:45", title: "Continue Hacking Period", type: "hack" }
    ]
  },
  {
    day: "Day 2 - October 11, 2025 (Saturday)", 
    events: [
      { time: "01:00", title: "Tea/Coffee Break", type: "break" },
      { time: "02:30", title: "Faculty & Mentor Round", type: "workshop" },
      { time: "07:00", title: "Hackathon Ends", type: "deadline" },
      { time: "07:00", title: "Breakfast", type: "break" },
      { time: "08:00", title: "Rest Break & Transition to Auditorium", type: "general" },
      { time: "08:45", title: "Pitching & Presentations Begin", type: "presentation" },
      { time: "11:45", title: "Pitching Sessions End", type: "presentation" },
      { time: "12:00", title: "Prize Distribution & Closing Ceremony", type: "general" }
    ]
  }
];

const getEventTypeStyle = (type: string) => {
  switch (type) {
    case 'hack':
      return 'border-primary bg-primary/10 text-primary';
    case 'workshop':
      return 'border-secondary bg-secondary/10 text-secondary';
    case 'break':
      return 'border-muted bg-muted/10 text-muted-foreground';
    case 'deadline':
      return 'border-destructive bg-destructive/10 text-destructive';
    case 'presentation':
      return 'border-accent bg-accent/10 text-accent';
    default:
      return 'border-card-border bg-card/10 text-foreground';
  }
};

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            21 hours of intense coding, innovation, and competition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="glass-card p-8">
              <h3 className="text-2xl font-orbitron font-bold text-gradient mb-8 text-center">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-105 
                      ${getEventTypeStyle(event.type)}`}
                  >
                    <div className="font-orbitron font-bold text-lg min-w-[60px]">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{event.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;