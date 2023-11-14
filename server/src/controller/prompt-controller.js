const Openai = require("../config/openai");
const InputPrompt = require("../models/input.prompt");

CHAT_MODEL = "gpt-3.5-turbo";

module.exports = {
  async sendText(req, res) {
    const openai = new Openai();
    const inputModel = new InputPrompt(req.body);

    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: inputModel.prompt },
    ];

    try {
      const response = await openai.call(CHAT_MODEL, messages);

      return res.status(200).json({
        sucess: true,
        data: response,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "There was an inssue on the server",
      });
    }
  },
};
