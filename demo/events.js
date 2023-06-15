import EventEmitter from 'events'

const emitter = new EventEmitter()

// emitter.on('anything', data =>{
//     console.log('ON: anything', data)
// })

// emitter.emit('anything', {a:1})
// emitter.emit('anything', {b:2})

// setTimeout(()=>{
//     emitter.emit('anything', {c:3})
// }, 2000)

class Dispatcher extends EventEmitter {
    subscribe(eventName, callBack){
        console.log('[subscribe...]')
        this.on(eventName, callBack)
    }

    dispatch(eventName, data){
        console.log('[dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()


dis.subscribe('aaa', data =>{
    console.log('on: aaa', data)
})

dis.dispatch('aaa', {aaa:22})
