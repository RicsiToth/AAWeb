using Microsoft.AspNetCore.Mvc;
using InternetBanking.Model;
using System.Collections.Generic;
using System.Linq;
using InternetBanking.Services;

namespace InternetBanking {

    [ApiController]
    [Route("api/transaction")]
    public class TransactionController : ControllerBase {
        private ITransactionService _transactionService;
        public TransactionController(ITransactionService transactionService) {
            _transactionService = transactionService;
        }

        [HttpGet]
        public IList<Transaction> getAll() {
            return _transactionService.GetTransactions();
        }

        [HttpGet("{id}")]
        public Transaction get(decimal id) {
            return  _transactionService.GetTransaction(id);
        }
    }
}