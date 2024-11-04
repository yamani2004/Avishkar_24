async function loadClasses() {
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