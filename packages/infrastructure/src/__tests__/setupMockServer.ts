import { RequestHandler } from 'msw';
import { setupServer } from 'msw/node';

export const setupMockServer = (...handlers: Array<RequestHandler>) => {
  const server = setupServer(...handlers);

  // Start server before all tests
  beforeAll(() => server.listen());

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());

  return server;
};
