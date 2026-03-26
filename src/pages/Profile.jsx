import { useState, useEffect } from "react";
import API from "../services/api";
import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState({ name: "", email: "", targetRole: "", skills: [] });
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      await API.put("/profile", { 
        targetRole: user.targetRole, 
        skills: user.skills 
      });
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !user.skills.includes(newSkill.trim())) {
      setUser({ ...user, skills: [...user.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  const removeSkill = (skill) => {
    setUser({ ...user, skills: user.skills.filter(s => s !== skill) });
  };

  if (loading) return <div className="loading-state">Loading profile...</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <div className="profile-info">
            <h1>User Profile</h1>
            <p>{user.email}</p>
          </div>
        </div>

        {message && (
          <div className={`auth-${message.includes("success") ? "success" : "error"}`} style={{ marginBottom: "20px" }}>
            {message}
          </div>
        )}

        <div className="profile-form">
          <div className="profile-input-group">
            <label>Full Name</label>
            <input className="profile-input" value={user.name} disabled />
          </div>

          <div className="profile-input-group">
            <label>Target Career Role</label>
            <input 
              className="profile-input" 
              value={user.targetRole || ""} 
              onChange={(e) => setUser({ ...user, targetRole: e.target.value })}
              placeholder="e.g. Full Stack Developer"
            />
          </div>

          <div>
            <div className="profile-section-title">My Skills</div>
            <div className="skill-tags" style={{ marginBottom: "16px" }}>
              {user.skills.map(skill => (
                <span key={skill} className="skill-tag" style={{ cursor: "pointer" }} onClick={() => removeSkill(skill)}>
                  {skill} ✕
                </span>
              ))}
            </div>
            <div className="skills-input-row" style={{ marginTop: "8px" }}>
              <input 
                className="skills-input" 
                placeholder="Add a new skill..." 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
              />
              <button className="skills-btn" onClick={addSkill}>Add</button>
            </div>
          </div>

          <button className="save-profile-btn" onClick={handleSave} disabled={saving}>
            {saving ? "Saving Changes..." : "Save Profile Settings"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
