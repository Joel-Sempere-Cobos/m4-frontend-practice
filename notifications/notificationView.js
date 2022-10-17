export const buildNotificationView = (message) => {
    return `
    <p> ${message} </p>
    <button class="closeNotification"> Cerrar </button>
    `;
};
