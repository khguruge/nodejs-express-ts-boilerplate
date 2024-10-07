/* eslint-disable no-undef */
import app from '../src/config/app.config';

describe('server.ts tests', () => {
  it('should have the app defined', () => {
    expect(app).toBeDefined();
  });
});
