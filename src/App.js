// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/styles.css'; // Importing the updated CSS file

function App() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/classes');
                setClasses(response.data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <div>
            <nav className="navbar">
                <h1>Superhero Training Management</h1>
                <div>
                    <a href="#">Classes</a>
                    <a href="#">Attendance</a>
                    <a href="#">Register</a>
                </div>
            </nav>
            <main id="main-content">
                <h2>Welcome to the Superhero Training Portal!</h2>
                <h3>Available Classes:</h3>
                <ul>
                    {classes.map((classItem) => (
                        <li key={classItem._id}>{classItem.name} - {new Date(classItem.date).toLocaleDateString()}</li>
                    ))}
                </ul>
            </main>
            <footer>
                <p>©2024 Superhero Training Management</p>
            </footer>
        </div>
    );
}

export default App;