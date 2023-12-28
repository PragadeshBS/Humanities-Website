const StudentPdf = ({ pdfFile }) => {
  return (
    <div className="container">
      <embed src={pdfFile} width="100%" height="500px"></embed>
    </div>
  );
};
export default StudentPdf;
