import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch("", {
      method: 'POST',
      headers: {
        'Cntent-Type': '',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login successful', data); 
  } catch (error) {
    console.log('Error during login', error);
}
};

export { login };
