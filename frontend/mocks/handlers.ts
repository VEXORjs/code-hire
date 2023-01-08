import { rest } from "msw";

function getApiUrl(path: string) {
  return new URL(path, `${process.env.NEXT_PUBLIC_API_URL}`).toString();
}

const handlers = [
  rest.get(getApiUrl("/questions"), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];

export default handlers;
