const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-3.5-turbo",
      prompt: `${prompt}`,
      temperature: 0.3,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  }
};
