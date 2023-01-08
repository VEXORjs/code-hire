import { rest } from "msw";

const handlers = [
  rest.get("/api/questions", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];

export default handlers;
