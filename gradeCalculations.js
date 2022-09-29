const averageExams = (valueExam) => {
const numberValidation = valueExam.every(exam = typeof exam === 'number');
if(!nuberValidation) throw Error('Please Input Number');

const  sumValues = valueExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sumValues / valueExam.length;
};

const isStudentPassExam = (valueExam, name) => {
    const minValue = 75;
    const average = averageExams(valueExam);

    if(average > minValue) {
        console.log(`${name} pass the Exams`);
        return true;
    } else {
        console.log(`${name} fail the Exams`);
    }
};

module.exports = { averageExams, isStudentPassExam };