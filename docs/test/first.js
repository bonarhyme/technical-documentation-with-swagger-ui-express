module.exports = {
  post: {
    tags: ["Tag1"],
    description: "first route",
    operationId: "first",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#components/schemas/input",
            required: true,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success response",
        content: {
          "application/json": {
            schema: {
              $ref: "#components/schemas/responseFirst",
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
