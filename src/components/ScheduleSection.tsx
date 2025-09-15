const scheduleData = [
  {
    day: "Day 1 - February 15",
    events: [
      { time: "09:00", title: "Registration & Welcome", type: "general" },
      { time: "10:00", title: "Opening Ceremony", type: "general" },
      { time: "11:00", title: "Team Formation", type: "general" },
      { time: "12:00", title: "Hacking Begins!", type: "hack" },
      { time: "13:00", title: "Lunch Break", type: "break" },
      { time: "15:00", title: "AI/ML Workshop", type: "workshop" },
      { time: "17:00", title: "Web Dev Bootcamp", type: "workshop" },
      { time: "19:00", title: "Dinner", type: "break" },
      { time: "21:00", title: "Midnight Snacks", type: "break" }
    ]
  },
  {
    day: "Day 2 - February 16",
    events: [
      { time: "08:00", title: "Breakfast", type: "break" },
      { time: "10:00", title: "Mentor Sessions", type: "workshop" },
      { time: "12:00", title: "Lunch", type: "break" },
      { time: "14:00", title: "Final Sprint", type: "hack" },
      { time: "16:00", title: "Submission Deadline", type: "deadline" },
      { time: "17:00", title: "Project Presentations", type: "presentation" },
      { time: "19:00", title: "Judging & Awards", type: "general" },
      { time: "20:30", title: "Closing Ceremony", type: "general" }
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
            48 hours of intense coding, learning, and innovation
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
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${getEventTypeStyle(event.type)}`}
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