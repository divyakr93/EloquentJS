function tower()
{
let tower1 = ''; 
for(i=0;i<=8;i++)
{
 for(let j =0; j<i;j++)
 {
  tower1 += '#'; 
  } 
  tower1 += "\n";
   }
   console.log(tower1);
}
tower();