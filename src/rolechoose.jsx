import React, { useState } from "react";
import "./styles/chooseskill.css";

function RoleChoose() {
  const [selectedRole, setSelectedRole] = useState("client");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      setSelectedSkills([...selectedSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSelectedSkills(selectedSkills.filter((_, i) => i !== index));
  };

  return (
      <div className="outer">
        <div className="role-section">
          <div
            className={`role-card ${selectedRole === "client" ? "active" : ""}`}
            onClick={() => setSelectedRole("client")}
          >
            <p className="role-text">Client</p>
          </div>

          <div
            className={`role-card ${
              selectedRole === "developer" ? "active" : ""
            }`}
            onClick={() => setSelectedRole("developer")}
          >
            <p className="role-text">Developer</p>
          </div>
        </div>

        {selectedRole == "developer" && (
          <div className="middle">
            {/* Domain Select */}
            <div className="form-group">
              <label htmlFor="domain" className="label">
                Choose a skill domain:
              </label>

              <select id="domain" name="domain" className="select">
                <option value="Full Stack (Web)">Full stack - Web</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Data Science">Data Science</option>
                <option value="Full Stack - (Mob)">Full stack - App</option>
                <option value="Cloud">Cloud</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label">Choose the Skills</label>

              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={addSkill}
                placeholder="Type a skill and press Enter"
                className="input"
              />

              {selectedSkills.length > 0 && (
                <ol className="skill-list">
                  {selectedSkills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <span>{skill}</span>
                      <button
                        onClick={() => removeSkill(index)}
                        className="remove-btn"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        )}

        <div className="end">
          {/* Organization Input */}
          <div className="form-group">
            <label className="label">Enter your organization</label>
            <input
              type="text"
              placeholder="Organization name"
              className="input"
            />
          </div>

          {/* Purpose Input */}
          <div className="form-group">
            <label className="label">Purpose of collaboration</label>
            <textarea
              placeholder="Describe the purpose..."
              className="input textarea"
            />
          </div>

          <button className="submit-btn">Submit</button>
        </div>
      </div>
  );
}

export default RoleChoose;
