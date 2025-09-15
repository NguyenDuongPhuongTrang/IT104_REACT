let student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }
    ]
};

const getStudentSummary = (student) => {
    const {name , age, listMonhoc} = student;
    const totalScore = listMonhoc.reduce((sum, subject) => sum + subject.score, 0);
    const averageScore = totalScore / listMonhoc.length;
    let message;
    if (averageScore >= 8.5) {
        message = `Học sinh giỏi`;
    } else if (averageScore >= 7) {
        message = `Học sinh khá`;
    } else if (averageScore >= 5) {
        message = `Học sinh trung bình`;
    } else{
        message = `Học sinh yếu`;
    }

    const bestSubject = listMonhoc.reduce((best, subject) => {
        return subject.score > best.score ? subject : best;
    }, listMonhoc[0]);

    const weakSubject = listMonhoc.reduce((weak, subject) => {
        return subject.score < weak.score ? subject : weak;
    }, listMonhoc[0]);

    return `
    ${name} is ${age} years old.
    Average score: ${averageScore.toFixed(2)} -> ${message}.
    Best subject: ${bestSubject.subject}(${bestSubject.score}).
    Weakest subject: ${weakSubject.subject}(${weakSubject.score}).`;
}

console.log(getStudentSummary(student));