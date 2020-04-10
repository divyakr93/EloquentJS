//cleaning up after exception without bug
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
function transfer(from, amount)
{
	if(accounts[from] < amount)
	return;
let progrss = 0;
try
{
	accounts[from] -= amount;
	progress = 1;
	accounts[getaccount()] += amount;
	progress = 2;
}
finally
{
	if(progress == 1)
		acconunts[from] += amount;
}
}