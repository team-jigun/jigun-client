const io = require('socket.io-client');
const notifier = require('node-notifier')
const path = require('path')
const socket = io.connect('http://192.168.0.83:9999/', {
    reconnectionDelayMax: 10000,
    query: {
        key: "asd"
    }
});
socket.on('connect', () => {
    console.log('소켓이 연결되었습니다.');
})

socket.on('jigun', (sender, message,callback) => {
    console.log('메시지가 도착함')
    notifier.notify({
        title : `${sender}님의 메시지입니다.`,
        message,
        icon: path.join(__dirname, '1001.png'),
    });
    callback('지건마렵네')
})
