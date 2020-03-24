//the task 
////aray of string
const roads = ["alice house - bobs house","bobs house - post office", "alice house - curch road","church road -grete house", "grete house - farm", "farm - market place"];
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
} 
const roadgraph = buidgraph(roads);
class villagestate
{
	constructor(place, parcels)
	{
		this.place = place;
		this.parcels = parcels;
	}
	move(destination)
	{
		if(!roadgraph[this.place].includes(destination))
		{
			return this;
		}
		else
		{
			let parcels = this.parcels.map(p =>
			{
				if(p.place != this.place) return p;
				return {place: destination, address: p.address};

			}).filter(p => p.place != p.address);
			return new villagestate(destination, parcels)
		}
	}
}
let first = new villagestate(
	"post office", [{place: "post office", address: "alices house"}]);
	let next = first.move("alices house");
	console.log(next.place);
	console.log(next.parcels);
	console.log(first.place);