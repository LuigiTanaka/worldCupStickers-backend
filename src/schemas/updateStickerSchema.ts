import Joi from "joi";

const updateStickerSchema = Joi.object({
    quantity: Joi.number().greater(0).required(),
});

export default updateStickerSchema;
