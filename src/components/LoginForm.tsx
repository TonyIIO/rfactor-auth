import React from 'react';
import '../LoginForm.css';

const LoginForm: React.FC = () => {
    return (
        <div className="container">
            <form action="login.php" method="POST">
                <h2>Вход</h2>
                <label htmlFor="username">Имя пользователя:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default LoginForm;

