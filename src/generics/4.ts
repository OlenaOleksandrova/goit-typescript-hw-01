type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    // Оновлення користувача
    console.log('Updated', initialValues)
}

createOrUpdateUser({ 
  email: 'userOlena@mail.com', 
  password: 'password123' 
});
