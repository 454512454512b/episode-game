// firebase-messaging-sw.js
// Этот файл ДОЛЖЕН лежать в корне репозитория, рядом с index.html — так требует браузерное API.
// Он отвечает за уведомления, которые приходят, даже когда вкладка сайта закрыта.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB4rt_FSxNoF1eg1Ac422VQ_IRadLFwOCk",
  authDomain: "episode-push.firebaseapp.com",
  projectId: "episode-push",
  storageBucket: "episode-push.firebasestorage.app",
  messagingSenderId: "562430857661",
  appId: "1:562430857661:web:9467c3099c2d4552a6c2d4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'EPISODE';
  const body = (payload.notification && payload.notification.body) || '';
  self.registration.showNotification(title, {
    body: body,
    icon: undefined
  });
});
