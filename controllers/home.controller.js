const transaction = require("../models/transaction");
const TransactionService = require("../services/transaction-services");
const UserService = require("../services/user-services");

class HomeController {
  constructor() {
    this.transactionService = new TransactionService();
    this.userService = new UserService();
  }


  // this method is render home page or Get method
  home = async (req, res) => {
    const transaction = await this.transactionService.getAllTransactions();

    res.render("home", {
      title: "Home",
      transaction,
    });
  };


  // this method is save transaction to database
  storeTransaction = async (req, res) => {
    const { amount, category, type, date } = req.body;

    try {
      await this.transactionService.createTransaction({
        user_id: req.session.user.id,
        amount,
        category,
        type,
        date,
      });
      res.json({ message: "Transaction saved successfully" });
    } catch (error) {
      console.error("Error saving transaction:", error);
      return res.status(500).send("Failed to save transaction");
    }
  };


  //this method is update transaction to database
  updateTransaction = async (req, res) => {
    const { id } = req.params; // ✅ ambil id dengan benar
    const { amount, category, type, date } = req.body;

    console.log("REQ PARAMS:", req.params);
    console.log("REQ BODY:", req.body);

    if (!amount || !category || !type || !date) {
      return res.status(400).send("Invalid input");
    }

    try {
      const updated = await this.transactionService.updateTransaction(id, {
        amount,
        category,
        type,
        date,
      });

      if (!updated) {
        return res.status(404).send("Transaction not found");
      }

      res.json({ message: "Update success", data: updated });

    } catch (error) {
      console.error("Error updating transaction:", error);
      return res.status(500).send("Failed to update transaction");
    }
  };


  // this method is delete transaction to database
  deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
      await this.transactionService.deleteTransaction(id);
      res.status(200).json({ message: "Deleted" }); // kirim JSON
    } catch (error) {
      console.error("Error deleting transaction:", error);
      res.status(500).json({ message: "controller" });
    }
  };
}

module.exports = HomeController;
