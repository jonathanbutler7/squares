type SelectGridSizeProps = { handleGridSizeChange: (e: any) => void };

const GRID_SIZE_OPTIONS = [4, 5, 6];

export const SelectGridSize = ({
  handleGridSizeChange,
}: SelectGridSizeProps) => (
  <div>
    <label htmlFor='grid-size-options' style={{ marginRight: 8 }}>
      Change grid size:
    </label>
    <select
      name='grid-size-options'
      onChange={handleGridSizeChange}
      style={{ marginBottom: 16 }}
    >
      {GRID_SIZE_OPTIONS.map((size) => (
        <option value={size}>{size}</option>
      ))}
    </select>
  </div>
);
