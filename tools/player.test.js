import Players from 'player.js';
import { test, expect } from 'jest';

test('Reset life total to 20', () => {
  Players.resetPlayers(25);
  expect(state.players[1].life).toBe(25);
});
