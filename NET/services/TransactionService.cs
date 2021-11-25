using InternetBanking.Services;
using InternetBanking.Repositories;
using InternetBanking.Model;
using System.Collections.Generic;
using System.Linq;

public class TransactionService: ITransactionService {
    private ITransactionRepository _transactionRepository;
    public TransactionService() {
        _transactionRepository = new TransactionRepository();
    }
    public IList<Transaction> GetTransactions() {
        return _transactionRepository.GetTransactions().ToList();
    }
    public Transaction GetTransaction(decimal id) {
        return _transactionRepository.GetTransactions().FirstOrDefault(x=>x.TransactionId == id);
    }
    public void SaveTransaction(Transaction transaction) {
        _transactionRepository.CreateTransaction(transaction);
    }
}