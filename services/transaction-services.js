const { Transaction } = require("../models");

class TransactionService {
  constructor() {}


  // this method is create transaction to database
  async createTransaction(data) {
    try {
      return await Transaction.create({
        user_id: data.user_id,
        amount: data.amount,
        category: data.category,
        type: data.type,
        date: data.date,
      });
    } catch (error) {
      console.error(error);
      throw new Error("Cant create transaction");
    }
  }


  // this method is get all transaction from database
  async getAllTransactions() {
    try {
      return await Transaction.findAll();
    } catch (error) {
      console.error(error);
      throw new Error("Cant get transactions");
    }
  }

  async deleteTransaction(id) {
    try {
      const transaction = await Transaction.findByPk(id);
      console.log(transaction);

      await transaction.destroy();
    } catch (error) {
      console.error(error);
      throw new Error("Cant delete transaction");
    }
  }


  // this method is update transaction to database
  async updateTransaction(id, data) {
  try {
    const [affectedRows] = await Transaction.update(
      {
        amount: data.amount,
        category: data.category,
        type: data.type,
        date: data.date
      },
      {
        where: { id: id } // pastikan nama kolom sesuai model
      }
    );

    if (affectedRows === 0) {
      throw new Error(`Transaction with id ${id} not found or no changes`);
    }

    return await Transaction.findByPk(id);
  } catch (error) {
    console.error("Update error:", error);
    throw new Error("Cant update transaction");
  }
}

}

module.exports = TransactionService;
