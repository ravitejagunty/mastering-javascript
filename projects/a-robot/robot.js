/**
 * The project is taken from book called Eloquent Javascript written by Marjin Haverbeke
 * Design a robot system to find the path and deliver letters from one place to another with in the town
 */

/**
 * Street name and roads as an array
 */

const roads = [
    "Java's House-Python's House",
    "Java's House-Cabin",
    "Java's House-Post Office",
    "Python's House-Town Hall",
    "Javascript's House-Typescript's House",
    "Javascript's House-Town Hall",
    "Typescript's House-Golang House",
    'Golang House-Farm',
    'Golang House-Shop',
    'Marketplace-Farm',
    'Marketplace-Post Office',
    'Marketplace-Shop',
    'Marketplace- Town Hall',
    'Shop-Town Hall'
  ];



  function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
  const roadGraph = buildGraph(roads);
  
  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place !== this.place) return p;
          return { place: destination, address: p.address };
        }).filter(p => p.place !== p.address);
  
        return new VillageState(destination, parcels);
      }
    }
  }
  
  function randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
  }
  
  function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
      let { at, route } = work[i];
      for (let place of graph[at]) {
        if (place === to) return route.concat(place);
        if (!work.some(w => w.at === place)) {
          work.push({ at: place, route: route.concat(place) });
        }
      }
    }
  }
  
  function goalOrientedRobot({ place, parcels }, route) {
    if (route.length === 0) {
      let parcel = parcels[0];
      if (parcel.place !== place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return { direction: route[0], memory: route.slice(1) };
  }
  
  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }
  
  // Start the simulation
  let firstState = new VillageState("Alice's House", [
    { place: "Alice's House", address: "Bob's House" },
  ]);
  
  console.log("Running Smart Robot:");
  runRobot(firstState, goalOrientedRobot, []);
