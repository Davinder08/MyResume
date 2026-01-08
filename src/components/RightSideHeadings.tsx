const RightSideHeadings = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center">
      <h2>{title}</h2>
      <div className="w-full h-px bg-black" />
    </div>
  );
};

export default RightSideHeadings;
