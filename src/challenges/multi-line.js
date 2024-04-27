const data = {
    names: "John Doe",
    occupation: "Software Engineer",
    experience: 5,
    skills: ["Javascript", "Node.js", "React"],
};


const result = `Personal Information:
- Name: ${data.names}
- Occupation: ${data.occupation}

Experience: ${data.experience} years

Skills:
- ${data.skills[0]}
- ${data.skills[1]}
- ${data.skills[2]}`;

console.log(result);