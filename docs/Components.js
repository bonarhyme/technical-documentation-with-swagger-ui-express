module.exports = {
  components: {
    schemas: {
      id: {
        type: "string",
        description: "some random id",
        example: "12345678",
      },
      name: {
        type: "string",
        description: "some random name",
        example: "Dave John",
      },
      username: {
        type: "string",
        description: "some random username",
        example: "Dave",
      },
      town: {
        type: "string",
        description: "some random town",
        example: "Umudioka",
      },
      error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "This gives the error message",
            example: "An error occured",
          },
        },
      },
      input: {
        type: "object",
        properties: {
          name: {
            $ref: "#components/schemas/name",
          },
          username: {
            $ref: "#components/schemas/username",
          },
        },
      },
      responseFirst: {
        type: "object",
        properties: {
          name: {
            $ref: "#components/schemas/name",
          },
          username: {
            $ref: "#components/schemas/username",
          },
          message: {
            type: "string",
            description: "This gives the response message",
            example: "Response sent successfully",
          },
        },
      },
      responseSecond: {
        type: "object",
        properties: {
          id: {
            $ref: "#components/schemas/id",
          },
          town: {
            $ref: "#components/schemas/town",
          },
          message: {
            type: "string",
            description: "This gives the response message",
            example: "Response sent successfully",
          },
        },
      },
    },
  },
};
