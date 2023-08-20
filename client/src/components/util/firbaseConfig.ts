import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDgakgKUS9C8wYNtsqQCAQnvV2UB1glh8o',
  authDomain: 'instagram-clone-d9d73.firebaseapp.com',
  projectId: 'instagram-clone-d9d73',
  storageBucket: 'instagram-clone-d9d73.appspot.com',
  messagingSenderId: '24341187537',
  appId: '1:24341187537:web:5f87882371f3729ad8eef0',
  measurementId: 'G-ZX2KY36KQL',
};

const app = initializeApp(firebaseConfig);

export default app;
