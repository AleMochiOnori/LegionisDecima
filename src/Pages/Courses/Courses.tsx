import { useState } from "react";
import "./Courses.css";

type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

interface Slot {
  range: string;
  coach?: string;
}

interface CourseSchedule {
  course: string;
  days: Record<Day, Slot[]>;
}

const COURSE_COLORS: Record<string, string> = {
  "muay thai / kickboxing": "#e74c3c",
  "gym boxe / pre-pugilistica": "#3498db",
  "avvio combat": "#6B21A8",
  "athletic training": "#27ae60",
  "gym boxe femminile": "#800020",
  "muay thai teenagers": "#FFA500",
  "open class": "#444343",
  "kyokushin budokai": "#8B4513",
  "pugilato / pre-pugilistica": "#1d4ed8",
};

const winterSchedule: CourseSchedule[] = [
  {
    course: "Muay Thai / KickBoxing",
    days: {
      monday: [
        { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      tuesday: [{ range: "12:00 - 13:00", coach: "Giacomo Ratti" }],
      wednesday: [
        { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      thursday: [{ range: "12:00 - 13:00", coach: "Giacomo Ratti" }],
      friday: [
        { range: "13:00 - 14:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      saturday: [{ range: "11:00 - 12:00", coach: "Giacomo Ratti" }],
    },
  },
  {
    course: "Gym Boxe / Pre-pugilistica",
    days: {
      monday: [
        { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
      ],
      tuesday: [{ range: "13:00 - 14:00", coach: "Giacomo Ratti" }],
      wednesday: [
        { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
      ],
      thursday: [{ range: "13:00 - 14:00", coach: "Giacomo Ratti" }],
      friday: [
        { range: "12:00 - 13:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
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
    course: "Muay Thai Teenagers",
    days: {
      monday: [],
      tuesday: [{ range: "17:00 - 18:00", coach: "Leandro Cosentino" }],
      wednesday: [],
      thursday: [{ range: "17:00 - 18:00", coach: "Leandro Cosentino" }],
      friday: [],
      saturday: [],
    },
  },
  {
    course: "Gym Boxe Femminile",
    days: {
      monday: [],
      tuesday: [{ range: "18:00 - 19:00", coach: "Caterina Lanza" }],
      wednesday: [],
      thursday: [{ range: "18:00 - 19:00", coach: "Caterina Lanza" }],
      friday: [],
      saturday: [],
    },
  },
  {
    course: "Pugilato / Pre-pugilistica",
    days: {
      monday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      tuesday: [],
      wednesday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      thursday: [],
      friday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      saturday: [],
    },
  },
  {
    course: "Athletic Training",
    days: {
      monday: [],
      tuesday: [{ range: "19:00 - 20:00", coach: "Giuseppe Panella" }],
      wednesday: [],
      thursday: [{ range: "19:00 - 20:00", coach: "Giuseppe Panella" }],
      friday: [],
      saturday: [],
    },
  },
  {
    course: "Kyokushin Budokai",
    days: {
      monday: [],
      tuesday: [{ range: "20:00 - 21:00", coach: "Alessio Marabucci / Giacomo Ratti" }],
      wednesday: [],
      thursday: [{ range: "20:00 - 21:00", coach: "Alessio Marabucci / Giacomo Ratti" }],
      friday: [],
      saturday: [{ range: "12:00 - 13:00", coach: "Alessio Marabucci / Giacomo Ratti" }],
    },
  },
];

const summerSchedule: CourseSchedule[] = [
  {
    course: "Muay Thai / KickBoxing",
    days: {
      monday: [
        { range: "11:00 - 12:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      tuesday: [{ range: "10:00 - 11:00", coach: "Giacomo Ratti" }],
      wednesday: [
        { range: "11:00 - 12:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      thursday: [{ range: "10:00 - 11:00", coach: "Giacomo Ratti" }],
      friday: [
        { range: "11:00 - 12:00", coach: "Giacomo Ratti" },
        { range: "20:00 - 21:00", coach: "Alessio Marabucci" },
      ],
      saturday: [],
    },
  },
  {
    course: "Gym Boxe / Pre-pugilistica",
    days: {
      monday: [
        { range: "10:00 - 11:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
      ],
      tuesday: [{ range: "11:00 - 12:00", coach: "Giacomo Ratti" }],
      wednesday: [
        { range: "10:00 - 11:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
      ],
      thursday: [{ range: "11:00 - 12:00", coach: "Giacomo Ratti" }],
      friday: [
        { range: "10:00 - 11:00", coach: "Giacomo Ratti" },
        { range: "18:00 - 19:00", coach: "Matteo Chiavolini" },
      ],
      saturday: [],
    },
  },
  {
    course: "Pugilato / Pre-pugilistica",
    days: {
      monday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      tuesday: [],
      wednesday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      thursday: [],
      friday: [{ range: "19:00 - 20:00", coach: "Matteo Chiavolini" }],
      saturday: [],
    },
  },
  {
    course: "Athletic Training",
    days: {
      monday: [],
      tuesday: [{ range: "19:00 - 20:00", coach: "Giuseppe Panella" }],
      wednesday: [],
      thursday: [{ range: "19:00 - 20:00", coach: "Giuseppe Panella" }],
      friday: [],
      saturday: [],
    },
  },
  {
    course: "Kyokushin Budokai",
    days: {
      monday: [],
      tuesday: [{ range: "20:00 - 21:00", coach: "Alessio Marabucci / Giacomo Ratti" }],
      wednesday: [],
      thursday: [{ range: "20:00 - 21:00", coach: "Alessio Marabucci / Giacomo Ratti" }],
      friday: [],
      saturday: [],
    },
  },
  {
    course: "Open Class",
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [{ range: "10:00 - 11:30", coach: "Giacomo Ratti" }],
    },
  },
];

const CoursesSchedule = () => {
  const [isSummer, setIsSummer] = useState(false);
  const schedule = isSummer ? summerSchedule : winterSchedule;

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
      <div className="schedule-toggle">
        <button
          className={`toggle-btn${!isSummer ? " toggle-btn--active" : ""}`}
          onClick={() => setIsSummer(false)}
        >
          1 Settembre – 15 Giugno
        </button>
        <button
          className={`toggle-btn${isSummer ? " toggle-btn--active" : ""}`}
          onClick={() => setIsSummer(true)}
        >
          16 Giugno – 31 Luglio
        </button>
      </div>

      {isSummer && (
        <p className="schedule-note">
          NB: l'orario estivo dal 16 al 31 luglio è suscettibile di variazione.
          Alcuni corsi dell'orario invernale potrebbero essere mantenuti qualora
          si raggiungesse un numero sufficiente di adesioni.
        </p>
      )}

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
        {Object.entries(COURSE_COLORS)
          .filter(([name]) =>
            schedule.some((c) => c.course.toLowerCase() === name)
          )
          .map(([name, color]) => (
            <div key={name} className="legend-item">
              <span
                className="legend-swatch"
                style={{ backgroundColor: color }}
              >
                {name
                  .split(" ")
                  .filter((w) => w !== "/" && w !== "-")
                  .map((w) => w[0]?.toUpperCase() ?? "")
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

