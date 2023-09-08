class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
  async deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0) {
          this.balance += amount;
          resolve(
            `Berhasil mendepositkan ${amount}. Saldo sekarang: ${this.balance}`
          );
        } else {
          reject("Jumlah deposit tidak valid.");
        }
      }, 1000);
    });
  }
  async withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          resolve(
            `Berhasil menarik ${amount}. Saldo sekarang: ${this.balance}`
          );
        } else {
          reject("Jumlah penarikan tidak valid atau saldo tidak mencukupi.");
        }
      }, 1000);
    });
  }
}
const saldoDisplay = document.getElementById("saldoDisplay");
let saldo = 0;

function updateSaldoDisplay() {
  saldoDisplay.textContent = saldo;
}
async function tambahSaldo() {
  const jumlah = parseFloat(prompt("Tambah Saldo:"));
  try {
    const account = new BankAccount(saldo);
    const message = await account.deposit(jumlah);
    saldo = account.balance;
    updateSaldoDisplay();
    alert(message);
  } catch (error) {
    alert(error);
  }
}
async function kurangiSaldo() {
  const jumlah = parseFloat(prompt("Kurangi Saldo:"));
  try {
    const account = new BankAccount(saldo);
    const message = await account.withdraw(jumlah);
    saldo = account.balance;
    updateSaldoDisplay();
    alert(message);
  } catch (error) {
    alert(error);
  }
}
updateSaldoDisplay();
