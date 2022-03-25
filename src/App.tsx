import './styles.css';
import { ProjectDescription } from './project-description.component';
import {
  DocumentApiSolution,
  ArraySolution,
  HashTableSolution,
} from './solutions/';

export function App() {
  return (
    <main>
      <ProjectDescription />
      <ArraySolution />
      <HashTableSolution />
      <DocumentApiSolution />
    </main>
  );
}
