import { AppContext } from "../context/index";
import Form from "../components/UI/Form/Form";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

export const Login = () => {
  const { setIsAuth } = AppContext();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <Form onSubmit={login}>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </Form>
    </div>
  );
};
