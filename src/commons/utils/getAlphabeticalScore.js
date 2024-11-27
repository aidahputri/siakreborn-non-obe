export const getLetterGrade = (score) => {
  if (score >= 85 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 85) {
    return "A-";
  } else if (score >= 75 && score < 80) {
    return "B+";
  } else if (score >= 70 && score < 75) {
    return "B";
  } else if (score >= 65 && score < 70) {
    return "B-";
  } else if (score >= 60 && score < 65) {
    return "C+";
  } else if (score >= 55 && score < 60) {
    return "C";
  } else if (score >= 40 && score < 55) {
    return "D";
  } else if (score >= 0 && score < 40) {
    return "E";
  } else {
    return "Invalid score";
  }
};
