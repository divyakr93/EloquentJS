//
villagestate.random = function(parcelcount = 5)
{
	let parcels = [];
	for(let i =0;i<parcelcount;i++)
	{
		let address = randompick(Object.keys(roadgraph));
		let place;
		do
		{
			place = randompick(Object.keys(roadgraph));
		}
		while(place == address);
		parcels.push({place,address});
	}
	return new villagestate("post office",parcels);
};