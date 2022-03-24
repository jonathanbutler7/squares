import './styles.css';
import { DocumentApiSolution } from './solutions/document-api/document-api-solution.component';
import { ProjectDescription } from './project-description';
import { ArraySolution } from './solutions/array/array-solution.componpent';
import { HashTableSolution } from './solutions/hash-table/hash-table-solution.component';

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
