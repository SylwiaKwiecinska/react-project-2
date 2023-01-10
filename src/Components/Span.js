function Span({ value }) {
  return (
    <div className="div_converter">
      <p>is:</p>
      <span type="number" id="spanValue" className="span">
        {value}
      </span>
      <span className="span">PLN</span>
    </div>
  );
}
export default Span;
