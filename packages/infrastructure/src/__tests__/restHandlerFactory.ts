import {
  PathParams,
  RequestHandler,
  ResponseComposition,
  ResponseResolver,
  rest,
  RestContext,
  RestRequest,
  DefaultBodyType,
} from 'msw';
import { Mock } from 'vitest';

export const restHandlerFactory = <
  T extends DefaultBodyType, // Request body type
  K extends PathParams, // Request URL path params
  U extends DefaultBodyType // Response body type
>(
  method: keyof typeof rest,
  path: string,
  resolver: ResponseResolver<RestRequest<T, K>, RestContext, U>
) => {
  return (args?: {
    data?: U;
    err?: U;
    status?: number;
    mock?: Mock<[RestRequest<T, K>, ResponseComposition<U>, RestContext], void>;
  }): RequestHandler =>
    rest[method](
      path,
      (
        req: RestRequest<T, K>,
        res: ResponseComposition<U>,
        ctx: RestContext
      ) => {
        args?.mock?.(req, res, ctx);

        if (args?.err) {
          return res(ctx.status(args.status || 400), ctx.json(args.err));
        }
        if (args?.data) {
          return res(
            ctx.status(args.status || method === 'post' ? 201 : 200),
            ctx.json(args.data)
          );
        }

        return resolver(req, res, ctx);
      }
    );
};

export type MockType = Mock<
  [
    RestRequest<DefaultBodyType, PathParams>,
    ResponseComposition<DefaultBodyType>,
    RestContext
  ],
  void
>;
