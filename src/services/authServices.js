
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const
 userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Inicio de sesión exitoso:', user);
    return user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error; 
  }
};

// Función para autenticar y obtener el usuario actual
export const authenticate = async (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Usuario autenticado:', user);
      callback(user);
    } else {

      console.log('Usuario no autenticado');
      callback(null);
    }
  });
};
