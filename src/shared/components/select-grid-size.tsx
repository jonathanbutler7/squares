type SelectGridSizeProps = {
  options: number[];
  gridSize: number;
  setGridSize: (e: any) => void;
  handleReset: () => void;
};

export const SelectGridSize = ({
  options,
  gridSize,
  setGridSize,
  handleReset,
}: SelectGridSizeProps) => (
  <>
    <p style={{ display: 'inline' }}>Set grid size: </p>
    <select
      onChange={(e) => {
        setGridSize(+e.target.value);
        handleReset();
      }}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
    <h4>Grid size: {gridSize}</h4>
  </>
);
