function chess() 
{
 let chessboard = "";
  for(let i=1;i<8;i++)
  { 
  if(i % 2 == 0)
  {
	for(let j = 1;j <= 4;j++) 
	{
	chessboard += '#';
	}
	}
	else
	{
	chessboard += ' ';
	for(let j= 1;j <= 4;j++)
	{
	chessboard += "#";
	}
}
chessboard += "\n";
}
console.log(chessboard);
}
chess();