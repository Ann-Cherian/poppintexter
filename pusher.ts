import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1566211",
    key: "595f12228ffbcbc7fac4",
    secret:"6ecf3a855a2dfefb22b8",
    cluster: "ap2",  
    useTLS: true,   

});

export const clientPusher = new ClientPusher('595f12228ffbcbc7fac4', {
    cluster: 'ap2',
});