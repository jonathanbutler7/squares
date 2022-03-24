import './styles.css';
import { DocumentApiSolution } from './document-api/document-api-solution';
import { ProjectDescription } from './project-description';
import { HooksSolution } from './array/array-solution';
import { HashTableSolution } from './hash-table/hash-table-solution';

export function App() {
  return (
    <>
      <ProjectDescription />
      <DocumentApiSolution />
      <hr />
      <HooksSolution />
      <hr />
      <HashTableSolution />
    </>
  );
}
