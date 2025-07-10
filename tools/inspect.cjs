const { createProjectGraphAsync } = require('@nx/devkit');
const { HashPlanInspector } = require('nx/src/hasher/hash-plan-inspector');

async function main() {
  const graph = await createProjectGraphAsync();
  const hashPlanInspector = new HashPlanInspector(graph);
  await hashPlanInspector.init();
  const task = {
    project: '@acme/ui',
    target: 'lint',
  };
  console.log(
    JSON.stringify(hashPlanInspector.inspectTask(task), null, 2)
  );
}

main();

