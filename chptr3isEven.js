const isEven = function(n)
{
	if(n == 0) return 0;
	else if( n== 1) return 1;
	else
	return isEven(n-2);
};
isEven(10);