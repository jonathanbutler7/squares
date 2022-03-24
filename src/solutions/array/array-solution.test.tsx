import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';
import { ArraySolution } from './array-solution.component';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

test('Array solution should should render', () => {
  const component = renderer.create(<ArraySolution />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
  expect(tree).toMatchSnapshot();
});
