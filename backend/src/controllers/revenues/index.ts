import * as create from "./Create.controller.js";
import * as getAll from "./GetAll.controller.js";
import * as getById from "./GetById.controller.js";
import * as updateById from "./UpdateById.controller.js";
import * as deleteById from "./DeleteById.controller.js";

export const revenuesControllers = {
  ...getAll,
  ...getById,
  ...create,
  ...deleteById,
  ...updateById,
};
