import api from "../common/api";

export const subscribe = async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = (await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BPe0Xy1hhYkbXXzyo49b3kGrcDr1um4FJQZafiUI5m5BNBbVLEX9zdfbZYYDFnfB75nqVucHItCMRC5hiCTiQqk'
    })).toJSON();

    const {endpoint, keys} = subscription;

    api.post('/webpush', {
        endpoint: endpoint,
        auth: keys?.auth,
        p256dh: keys?.p256dh
    });
}