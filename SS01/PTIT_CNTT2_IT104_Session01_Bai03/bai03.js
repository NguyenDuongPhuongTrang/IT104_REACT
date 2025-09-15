const students = [
  { id: 1, name: "Nguyễn A" },
  { id: 2, name: "Trần B" },
  { id: 3, name: "Lê C" },
  { id: 4, name: "Phạm D" }
];

students.forEach((student) => {
    console.log(`ID: ${student.id}, Name: ${student.name}`);
})