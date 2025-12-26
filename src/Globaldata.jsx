// yahi file sari jaga use ho rahi hai

export let data = [];

// account add karna
export function addAccount(newUser) {
  data.push(newUser);
}

// credit
export function credit(accountNo, amount) {
  data = data.map(item =>
    item.AccountNo == accountNo
      ? { ...item, Balance: Number(item.Balance) + Number(amount) }
      : item
  );
}

// debit
export function debit(accountNo, amount) {
  data = data.map(item =>
    item.AccountNo == accountNo
      ? { ...item, Balance: Number(item.Balance) - Number(amount) }
      : item
  );
}
