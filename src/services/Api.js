// src/services/api.js

// Load Classes Function
export async function loadClasses() {
    const response = await fetch('/api/classes');
    
    if (response.ok) {
        const classes = await response.json();
        let content = '<h2>Classes</h2><ul>';
        
        classes.forEach(cls => {
            content += `<li>${cls.className} - ${cls.date} at ${cls.time}</li>`;
        });
        
        content += '</ul>';
        document.getElementById('main-content').innerHTML = content;
    }
}

// Load Attendance Function
export async function loadAttendance() {
    const response = await fetch('/api/attendance');
    
    if (response.ok) {
        const records = await response.json();
        let content = '<h2>Attendance Records</h2><ul>';
        
        records.forEach(record => {
            content += `<li>User ID ${record.userId} - Class ID ${record.classId} - Status ${record.status}</li>`;
        });
        
        content += '</ul>';
        document.getElementById('main-content').innerHTML = content;
    }
}

// Show Register Form Function
export function showRegisterForm() {
    document.getElementById('main-content').innerHTML =
        `<h2>Register User</h2>
         <form onsubmit="registerUser(event)">
             <input type="text" placeholder="Username" id="username" required />
             <input type="email" placeholder="Email" id="email" required />
             <input type="password" placeholder="Password" id="password" required />
             <button type="submit">Register</button>
         </form>`;
}

// Register User Function
export async function registerUser(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
        alert("Registration successful!");
        loadClasses(); // Reload classes or redirect as necessary.
    } else {
        alert("Registration failed.");
    }
}