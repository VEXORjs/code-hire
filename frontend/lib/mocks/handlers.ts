import { rest } from "msw";

function apiUrl(path: string) {
  return new URL(path, `${process.env.API_URL}`).toString();
}

const handlers = [
  rest.get(apiUrl("/questions"), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["hello"]));
  }),
];

export default handlers;
