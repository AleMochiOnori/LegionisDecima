import React from "react";
import "./CourseCard.css";

interface CourseCardProps {
  title: string;
  description: string;
  highlight?: string;
  badge?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  highlight,
  badge,
}) => {
  return (
    <article className="course">
      <div className="course-header">
        <h3>{title}</h3>
      </div>
      <p className="decriptionBoxeDetail">{description}</p>
      {badge && <div className="course-badge">{badge}</div>}
      {highlight && <p className="highlight">{highlight}</p>}
    </article>
  );
};

export default CourseCard;
