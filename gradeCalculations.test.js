const { averageExams } = require('./gradeCalculations');

test('it should return excact average', () => {
    const listValuesOfExams = [80, 100, 100, 80];
    expect (averageExams(listValuesOfExams)).toEqual(90);
})