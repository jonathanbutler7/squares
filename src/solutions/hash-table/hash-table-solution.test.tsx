import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { HashTableSolution } from './hash-table-solution.component';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

test('Hash table solution should should render', () => {
  const component = renderer.create(<HashTableSolution />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(tree).toMatchSnapshot();
});
