import React from 'react';
import './App.css';

function App() {
  const resumeData = {
    name: "Садыкалиев Эрсултан",
    title: "Junior Developer",
    contacts: {
      email: "sadykalieve1@gmail.com",
      phone: "+996 990 690 390",
      github: "https://github.com/ersultansadykaliev",
      location: "Бишкек, Кыргызстан"
    },
    about: "Студент направления программной инженерии (INAI). Занимаюсь разработкой прикладных программ на Java, веб-интерфейсов и сетевыми технологиями. Быстро учусь новому и с интересом развиваю собственные проекты.",
    skillsPrimary: ["Java", "SQL / MS Access", "React"],
    skillsSecondary: ["HTML & CSS", "JavaScript", "Cisco", "Git & GitHub"],
    experience: [
      {
        role: "Учебные & Личные проекты",
        place: "Самостоятельная разработка",
        period: "2024 — Настоящее время",
        detail: "Разработка прикладных программ и виджетов на Java, проектирование реляционных баз данных, создание адаптивных веб-страниц."
      }
    ],
    education: [
      {
        degree: "Программная инженерия (Бакалавриат)",
        school: "INAI (Кыргызско-Германский институт прикладной информатики)",
        period: "2024 — 2028"
      }
    ]
  };

  return (
    <div className="container">
      <div className="card">
        {/* Шапка профиля */}
        <header className="profile-header">
          <img 
            src="https://github.com/ersultansadykaliev.png" 
            alt={resumeData.name} 
            className="avatar" 
          />
          <div className="profile-details">
            <h1>{resumeData.name}</h1>
            <span className="subtitle">{resumeData.title}</span>
            <div className="contacts-grid">
              <div>📍 {resumeData.contacts.location}</div>
              <div>📞 {resumeData.contacts.phone}</div>
              <div>
                📧 <a href={`mailto:${resumeData.contacts.email}`}>{resumeData.contacts.email}</a>
              </div>
              <div>
                🔗 <a href={resumeData.contacts.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </header>

        {/* О себе */}
        <section className="section">
          <h2 className="section-title">О себе</h2>
          <p className="about-text">{resumeData.about}</p>
        </section>

        {/* Навыки */}
        <section className="section">
          <h2 className="section-title">Навыки</h2>
          <div className="skill-category">
            <span className="category-title">Ключевые технологии</span>
            <div className="badges">
              {resumeData.skillsPrimary.map((skill, index) => (
                <span key={index} className="badge primary">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <span className="category-title">Базовые & Инструменты</span>
            <div className="badges">
              {resumeData.skillsSecondary.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Опыт и Проекты */}
        <section className="section">
          <h2 className="section-title">Опыт и Проекты</h2>
          {resumeData.experience.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="item-header">
                <span className="item-role">{item.role}</span>
                <span className="item-date">{item.period}</span>
              </div>
              <div className="item-place">{item.place}</div>
              <p className="item-desc">{item.detail}</p>
            </div>
          ))}
        </section>

        {/* Образование */}
        <section className="section">
          <h2 className="section-title">Образование</h2>
          {resumeData.education.map((item, index) => (
            <div key={index} className="education-item">
              <div className="item-header">
                <span className="item-role">{item.degree}</span>
                <span className="item-date">{item.period}</span>
              </div>
              <div className="item-place">{item.school}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;