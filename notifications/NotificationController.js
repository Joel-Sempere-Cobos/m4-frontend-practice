import { pubSub } from '../pubsub.js';
import { buildNotificationView } from './notificationView.js';

export class NotificationController {
    constructor(nodeElement) {
        this.notificationElement = nodeElement;

        this.suscribeToEvents();
    }

    suscribeToEvents() {
        pubSub.subscribe(pubSub.TOPICS.ERROR_NOTIFICATION, (message) => {
            this.showNotification(message);
        });
    }

    showNotification(message) {
        this.notificationElement.innerHTML = buildNotificationView(message);

        const closeButtonElement = this.notificationElement.querySelector('.closeNotification');

        closeButtonElement.addEventListener('click', () => {
            this.notificationElement.innerHTML = '';
            location.reload();
        });
    }

    closeNotification() {}
}
