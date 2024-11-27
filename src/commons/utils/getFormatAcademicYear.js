export const formatAcademicYear = (code) => {
  const [academicYear, term] = code.split(" - ");
  return `Tahun Ajaran ${academicYear} Term ${term}`;
};
