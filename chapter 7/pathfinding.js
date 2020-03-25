//path finding
var  edges = ["alice house - bobs house","bobs house - post office", "alice house - curch road","church road -grete house", "grete house - farm", "farm - market place"];
function findroute(graph, from, to)
{
	let work = [{at: from, route: []}];
	for(let i =0;i<work.length;i++)
	{
		let {at, route} = work[i];
		for(let place of graph[at])
		{
			if(place ==  to) 
				return route.concat(place);
			if(!work.some(w => w.at == place))
			{
				work.push({at: place, route: route.concat(place)});
			}
		}
	}
}
function goalorientedrobots({place, parcels}, route)
{
	if(route.length == 0)
	{
		let parcel = parcels[0];
		if(parcel.place !=place)
		{
			route = findroute(roadgraph, place, parcel.place);
		}
		else
		{
			route = findroute(roadgraph,place,parcel.addess);
		}
	}
	return {direction: route[0], memory: route.slice(1)};
}