//cleaning up after exception
const accounts = {
	a: 100,
	b: 0,
	c: 20
};
function getaccount()
{
	let accountname = prompt("enter an accountname");
	if(!accounts.hasOwnProperty(accountname))
	{
		throw new Error(`no such accounts: ${accountname}`);
	}
	return accountname;
}
funcction transfer(from, amount)
{
	if(accounts[from] < amount) return;
	accounts[from] -= amount;
	accounts[getaccount()] += amount;
}
console.log(transfer(a, 10));