using InternetBanking.Model;
using System.Collections.Generic;

namespace InternetBanking.Services {
    public interface ITransactionService {
        IList<Transaction> GetTransactions();

        Transaction GetTransaction(decimal id);

        void SaveTransaction(Transaction transaction);
    }
}