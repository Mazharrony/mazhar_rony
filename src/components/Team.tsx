import React from 'react';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const Team: React.FC = () => {
  const team: TeamMember[] = [
    { name: 'Alex Johnson', role: 'Creative Director', initials: 'AJ' },
    { name: 'Sarah Chen', role: 'UI Designer', initials: 'SC' },
    { name: 'Mike Davis', role: 'Developer', initials: 'MD' },
    { name: 'Emma Wilson', role: 'Strategist', initials: 'EW' }
  ];

  return (
    <section className="fold team">
      <div className="container">
        <div className="team-header">
          <h2>Our amazing team</h2>
          <button className="btn btn-primary">Join our team</button>
        </div>

        <div className="grid grid-4">
          {team.map((member, index) => (
            <div key={index} className="team-card card">
              <div className="team-avatar">{member.initials}</div>
              <h4>{member.name}</h4>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
