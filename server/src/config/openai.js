const OpenAI = require("openai").OpenAI;
require("dotenv").config();

class Openai {
  constructor() {
    this.openai = new OpenAI();
    this.openai.apiKey = process.env.OPENAI_API_KEY;
  }

  async call(
    modelName,
    data,
    temperature = 0.4,
    frequencyPenalty = 2,
    presencePenalty = -1
  ) {
    try {
      const response = await this.openai.chat.completions.create({
        model: modelName,
        messages: data,
        temperature: temperature,
        frequency_penalty: frequencyPenalty,
        presence_penalty: presencePenalty,
      });

      const chatResponse = response.choices[0].message.content;
      return chatResponse;
    } catch (error) {
      console.error("Error in OpenAI API call:", error);
      throw error;
    }
  }
}

module.exports = Openai;
