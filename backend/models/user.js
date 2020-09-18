import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = mongoose.Schema({
  totalMoney: Number,
  categories: [
    {
      value: {
        type: String,
        enum: ["store", "expenditure"],
      },
      name: String,
      currentNumber: Number,
      id: String,
    },
  ],
  transactions: [
    {
      value: {
        type: String,
        enum: ["gain", "loss"],
      },
      from: String,
      to: String,
      amount: Number,
      id: String,
      time: Number,
    },
  ],
});

userSchema.static("createDefaultUser", async function () {
  let newUser = new this({
    totalMoney: 0,
    categories: [],
    transactions: [],
  });
  await newUser.createNewStore("bank");
  await newUser.createNewStore("cash");
  await newUser.createNewStore("deadend");
  await newUser.createNewExpenditure("rent");
  await newUser.createNewExpenditure("gas");
  await newUser.createNewExpenditure("food");
  await newUser.createNewExpenditure("online subscription");
  await newUser.createNewExpenditure("free time");
  return newUser.save();
});

userSchema.methods.createNewStore = function (name) {
  this.categories.push({
    value: "store",
    name: name,
    currentNumber: 0,
    id: uuidv4(),
  });
  return this.save();
};

userSchema.methods.createNewExpenditure = function (name) {
  this.categories.push({
    value: "expenditure",
    name: name,
    currentNumber: 0,
    id: uuidv4(),
  });
  return this.save();
};

userSchema.methods.deleteCategory = async function (id) {
  await this.model("User").update(
    {},
    {
      $pull: { categories: { id: id } },
    }
  );
  return this.save();
};

userSchema.methods.updateCategory = async function (id, newName) {
  await this.model("User").update(
    { "categories.id": id },
    {
      $set: { "categories.$.name": newName },
    }
  );
  return this.save();
};

userSchema.methods.gainMoney = async function (idStore, amount) {
  await this.model("User").update(
    {
      "categories.id": idStore,
    },
    {
      $inc: {
        "categories.$.currentNumber": amount,
      },
    }
  );
  await this.transactions.push({
    value: "gain",
    to: idStore,
    amount: amount,
    id: uuidv4(),
  });
  return this.save();
};

userSchema.methods.spendMoney = async function (toId, fromId, amount) {
  await this.model("User").update(
    {
      "categories.id": toId,
    },
    {
      $inc: {
        "categories.$.currentNumber": amount,
      },
    }
  );
  await this.model("User").update(
    {
      "categories.id": fromId,
    },
    {
      $inc: {
        "categories.$.currentNumber": -amount,
      },
    }
  );
  await this.transactions.push({
    value: "loss",
    to: toId,
    from: toId,
    amount: amount,
    id: uuidv4(),
  });
  return this.save();
};

export const modelUser = mongoose.model("User", userSchema);