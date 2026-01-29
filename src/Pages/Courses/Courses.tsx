import "./Courses.css";

type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

interface Slot {
  range: string; // es. "12:00 - 13:00"
  coach?: string; // puoi inserire qui il maestro
}

interface CourseSchedule {
  course: string;
  days: Record<Day, Slot[]>;
}

const COURSE_COLORS: Record<string, string> = {
  "muay thai / kickboxing": "#e74c3c",
  "gym boxe": "#3498db",
  "avvio combat": "#6B21A8",
  "athletic training": "#27ae60",
  "gym boxe femminile": "#800020",
  "muay thai young": "#FFA500",
  "open class": "#444343",
};

const CoursesSchedule = () => {
  const schedule: CourseSchedule[] = [
    {
      course: "Muay Thai / KickBoxing",
      days: {
        monday: [
          { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
          { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
        ],
        tuesday: [
          { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
          { range: "20:00 - 21:00", coach: "Giacomo Ratti" },
        ],
        wednesday: [
          { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
          { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
        ],
        thursday: [
          { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
          { range: "20:00 - 21:00", coach: "Giacomo Ratti" },
        ],
        friday: [
          { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
          { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
        ],
        saturday: []
      },
    },
    {
      course: "Gym Boxe",
      days: {
        monday: [
          { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
          { range: "19:00 - 20:00", coach: "Matteo Chiavolini" },
        ],
        tuesday: [
          { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
          { range: "18:00 - 19:00", coach: "Alessandro Mastrelli" },
        ],
        wednesday: [
          { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
          { range: "19:00 - 20:00", coach: "Matteo Chiavolini" },
        ],
        thursday: [
          { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
          { range: "18:00 - 19:00", coach: "Alessandro Mastrelli" },
        ],

        friday: [
          { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
          { range: "19:00 - 20:00", coach: "Matteo Chiavolini" },
        ],
        saturday: [],
      },
    },

    {
      course: "Avvio Combat",
      days: {
        monday: [{ range: "17:00 - 18:00", coach: "Francesco Cerqua" }],
        tuesday: [],
        wednesday: [{ range: "17:00 - 18:00", coach: "Francesco Cerqua" }],
        thursday: [],
        friday: [{ range: "17:00 - 18:00", coach: "Francesco Cerqua" }],
        saturday: [],
      },
    },
    {
      course: "Gym boxe femminile",
      days: {
        monday: [],
        tuesday: [{ range: "17:30 - 19:00", coach: "Caterina Lanza" }],
        wednesday: [],
        thursday: [{ range: "17:30 - 19:00", coach: "Caterina Lanza" }],
        friday: [],
        saturday: [],
      },
    },
    {
      course: "Athletic training",
      days: {
        monday: [{ range: "18:00 - 19:00", coach: "Giuseppe Pannella" }],
        tuesday: [],
        wednesday: [{ range: "18:00 - 19:00", coach: "Giuseppe Pannella" }],
        thursday: [],
        friday: [{ range: "18:00 - 19:00", coach: "Giuseppe Pannella" }],
        saturday: [],
      },
    },
    {
      course: "Muay Thai Young",
      days: {
        monday: [],
        tuesday: [{ range: "17:00 - 18:00", coach: "Leandro Cosentino" }],
        wednesday: [],
        thursday: [{ range: "17:00 - 18:00", coach: "Leandro Cosentino" }],
        friday: [],
        saturday: [],
      },
    },{
      course: "Open class",
      days: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [{ range: "11:00 - 12:30", coach: "Giacomo Ratti" }],
      },
    },
  ];

  const days: { key: Day; label: string }[] = [
    { key: "monday", label: "Lunedì" },
    { key: "tuesday", label: "Martedì" },
    { key: "wednesday", label: "Mercoledì" },
    { key: "thursday", label: "Giovedì" },
    { key: "friday", label: "Venerdì" },
    { key: "saturday", label: "Sabato" },
  ];

  const getCourseColor = (courseName: string) => {
    const k = courseName.toLowerCase();
    return COURSE_COLORS[k] ?? "#bdc3c7";
  };

  return (
    <div className="schedule-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Corso</th>
            {days.map((d) => (
              <th key={d.key}>{d.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {schedule.map((c) => (
            <tr key={c.course}>
              <td className="course-name">{c.course}</td>

              {days.map((d) => {
                const slots = c.days[d.key];
                return (
                  <td key={d.key} className="times-cell">
                    {slots.length > 0 ? (
                      <div className="course-stack">
                        {slots.map((slot, i) => {
                          const bg = getCourseColor(c.course);
                          return (
                            <div
                              key={i}
                              className="course-pill"
                              style={{
                                backgroundColor: bg,
                                color: "black",
                              }}
                            >
                              <span className="pill-time">{slot.range}</span>
                              <span className="pill-coach">{slot.coach}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <span className="empty-slot">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="legend">
        {Object.entries(COURSE_COLORS).map(([name, color]) => (
          <div key={name} className="legend-item">
            <span className="legend-swatch" style={{ backgroundColor: color }}>
              {name
                .split(" ")
                .map((w) => w[0].toUpperCase())
                .join("")}
            </span>
            <span className="legend-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSchedule;
