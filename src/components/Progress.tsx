//

type Props = {
  value?: number;
};

export const Progress = (props: Props) => {
  const x = 100 - (props.value ?? 0);

  return (
    <div className="progress-root">
      <div
        className="progress-indicator"
        style={{ transform: `translateX(-${x}%)` }}
      ></div>
    </div>
  );
};
