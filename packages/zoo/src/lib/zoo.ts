import { getRandomAnimal } from '@acme/animal';
import { formatMessage } from '@acme/util';

export function zoo(): string {
  const result = getRandomAnimal();
  const message = `${result.name} says ${result.sound}!`;
  return formatMessage('ZOO', message);
}
