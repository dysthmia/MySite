// Калькулятор оценок
function calculateGrade(students) {
    for (let student of students) {
        let sr_zn = 0;
        for (let score of student.scores) {
            sr_zn += score;
        }
        student.average = sr_zn / student.scores.length;
        switch (true) {
            case (student.average >= 90):
                student.grade = 'A';
                break;
            case (student.average >= 80):
                student.grade = 'B';
                break;
            case (student.average >= 70):
                student.grade = 'C';
                break;
            case (student.average >= 60):
                student.grade = 'D';
                break;
            default:
                student.grade = 'F';
        }
    }
    return students;
}

const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];
console.log(calculateGrade(students));