import './styles.css';
import { DocumentApiSolution } from './document-api/document-api-solution.component';
import { ProjectDescription } from './project-description';
import { ArraySolution } from './array/array-solution.componpent';
import { HashTableSolution } from './hash-table/hash-table-solution.component';

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
