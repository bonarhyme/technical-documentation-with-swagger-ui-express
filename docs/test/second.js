module.exports = {
  get: {
    tags: ["Hello"],
    description: "second route",
    operationId: "second",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
          required: true,
          description: "Some random id",
        },
      },
      {
        name: "town",
        in: "query",
        schema: {
          $ref: "#/components/schemas/town",
          required: true,
          description: "Some random town",
        },
      },
    ],

    responses: {
      200: {
        description: "Success response",
        content: {
          "application/json": {
            schema: {
              $ref: "#components/schemas/responseSecond",
              required: true,
            },
          },
        },
      },
      400: {
        description: "error response",
        content: {
          "application/json": {
            schema: {
              $ref: "#components/schemas/error",
              required: true,
            },
          },
        },
      },
    },
  },
};
