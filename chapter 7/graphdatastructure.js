////aray of string
var  edges = ["alice house - bobs house","bobs house - post office", "alice house - curch road","church road -grete house", "grete house - farm", "farm - market place"];
function buidgraph(edges)
{
	let graph = Object.create(null);
	function addedge(from, to)
	{
		if(graph[from] == null)
		{
			graph[from] = [to];
		}
		else
		{
			graph[from].push(to);
		}
	}
	for(let [from, to] of edges.map(r =>r.split("-")))
	{
		addedge[from, to];
		addedge[to, from];
	}
	return graph;
} console.log(buidgraph(edges));