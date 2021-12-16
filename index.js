let  listTests = [
  {"test": {"id": 1, "cvss": 4.3}, "device": {"id": 1}, "pass": true},
  {"test": {"id": 1, "cvss": 4.3},  "device": {"id": 2}, "pass": false},
  {"test": {"id": 2, "cvss": 8},   "device": {"id": 1}, "pass": false},
  {"test": {"id": 2, "cvss": 8}, "device": {"id": 2}, "pass": true},
  {"test": {"id": 3, "cvss": 5.2}, "device": {"id": 1}, "pass": false},
  {"test": {"id": 3, "cvss": 5.2},   "device": {"id": 2}, "pass": true},
  {"test": {"id": 4, "cvss": 2},   "device": {"id": 1}, "pass": true},
  {"test": {"id": 4, "cvss": 2}, "device": {"id": 2}, "pass": false}
];
let distinctsIdDevices = [...new Set(listTests.map(el => el.device.id))]
//console.log(distinctsIdDevices);
distinctsIdDevices.map((id) => {
  let filtereds = listTests.filter((el) => el.device.id == id)
  //console.log(filtereds);
  let maxScore = filtereds.reduce((ac, el) => el.pass ? ac : (el.test.cvss > ac ? el.test.cvss : ac)  , 0)  
  //console.log(maxScore);
  let arrayReduce = filtereds.reduce((ac, el) => {
   ac.push(el.test);
   return ac;
  }, [])  
  console.log(arrayReduce);
});