import './styles.css';
import { DocumentApiSolution } from './document-api/document-api-solution';
import { ProjectDescription } from './project-description';
import { ArraySolution } from './array/array-solution';
import { HashTableSolution } from './hash-table/hash-table-solution';

export function App() {
  return (
    <>
      <ProjectDescription />
      <ArraySolution />
      <HashTableSolution />
      <DocumentApiSolution />
    </>
  );
}
