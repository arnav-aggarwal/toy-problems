/**
Automated Grading
A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.

NOTE: Round any calculations to the nearest 2 decimal places.

Examples
Input                                                             Output
"Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18" { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }
 */

const autograde = report => {
  const parsed = [].concat(...report.split(' ').map(item => item.split('\n')));
  const avg = arr => Number((arr.reduce((a, b) => a + Number(b), 0)/arr.length).toFixed(2));
  const averages = {};
  
  parsed.forEach((item, index) => {
    if(isNaN(item)) {
      const grades = [];
      while(!isNaN(parsed[++index])) {
        grades.push(parsed[index]);
      }
      
      averages[item] = avg(grades);
    }
  });
  
  averages.all = avg(Object.values(averages));
  return averages;
}
