import os from 'os'

console.log('OS:', os.platform());
//OS: darwin

console.log('Arhitecture processor:', os.arch());
//Arhitecture processor: arm64

console.log('Info about processors:', os.cpus());
// Info about processors: [
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 921270, nice: 0, sys: 543100, idle: 5513340, irq: 0 }
//     },
// .......

console.log('free memory:', os.freemem())
//free memory: 62160896

console.log('total memory:', os.totalmem())
//total memory: 8589934592

console.log('Home directory by this PC:', os.homedir())
//Home directory by this PC: /Users/misha

console.log('time "on": ', os.uptime());
//time "on":  13087

