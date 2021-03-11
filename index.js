const io = require('socket.io-client');
const notifier = require('node-notifier')
const path = require('path')
const socket = io.connect('http://222.110.147.50:9999/', {
    reconnectionDelayMax: 10000,
    query: {
        key: "asd"
    }
});
socket.on('connect', () => {
    notifier.notify({
        title : "소켓이 연결되었습니다.",
        message : "소켓이 연결되었습니다.",
        icon : path.join(__dirname, '1001.png')
    })
})

socket.on('jigun', (sender, message,callback) => {
    console.log('메시지가 도착함')
    notifier.notify({
        title : `${sender}님의 메시지입니다.`,
        message,
        icon: path.join(__dirname, '1001.png'),
    });
    callback()
})
