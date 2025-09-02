import { useState } from "react";
import { useFirebase } from "../context/MyTeacherContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

export const AddTeacher = () => {
  const firestore = getFirestore(app);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    contact: "",
    cabin: "",
    freeTime: "",
    img: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "teachers"), formData);
      alert("Teacher added successfully!");
      setFormData({
        name: "",
        subject: "",
        contact: "",
        cabin: "",
        freeTime: "",
        img: ""
      });
    } catch (err) {
      console.error("Error adding teacher: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="teacher-form">
      <h2>Add Teacher</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
      <input type="text" name="cabin" placeholder="Cabin No" value={formData.cabin} onChange={handleChange} required />
      <input type="text" name="freeTime" placeholder="Free Time" value={formData.freeTime} onChange={handleChange} required />
      <input type="text" name="img" placeholder="Image URL" value={formData.img} onChange={handleChange} />

      <button type="submit">Add Teacher</button>

      <style>{`
        .teacher-form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin: auto;
          gap: 10px;
        }
        .teacher-form input {
          padding: 8px;
          font-size: 16px;
        }
        .teacher-form button {
          background: green;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};
