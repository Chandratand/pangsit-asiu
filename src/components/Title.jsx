const Title = ({ title }) => {
  return (
    <div className="mx-auto w-fit md:mx-0">
      <div className="h-2 w-[60px] bg-primary" />
      <h2 className="header">{title}</h2>
    </div>
  );
};

export default Title;
