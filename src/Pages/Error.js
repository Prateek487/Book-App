const Error = (props) => {
  return (
    <div>
      <h1>Error</h1>
      <h2>{props.err.error.message}</h2>
    </div>
  );
};

export default Error;
