//simple object
let obj = { squirrel: false,
            events: ["worked", "touched tree", "pizza", "running"]
        }; 
        console.log(obj.squirrel);
        obj.wolf =  false;
        console.log(obj.wolf); 
        console.log("wolf" in obj);
        obj.deer= true;
        console.log(obj.deer);
        delete obj.deer;
        console.log("deer" in obj);
        console.log(obj.deer);
        console.log(`properties of obj--->  ${Object.keys(obj)}`);
        let objA = {
            a: 1, b: 2
        };
        console.log("first object ", objA);
        Object.assign(objA,{b: 3,c: 4});
        console.log("updated object ", objA);
        console.log("type of [] is----> ",typeof []);
        console.log("type of objA----> ",typeof objA);      