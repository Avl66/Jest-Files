import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";
const mock = jest.fn();

test("check input fields", () => {
  render(<UserForm />);
  const name = screen.getByRole("textbox", { name: /name/i });
  const email = screen.getByRole("textbox", { name: /email/i });
  const btn = screen.getByRole("button", { name: /user/i });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});

test("make sure callback is called", async () => {
  render(<UserForm onUserAdd={mock} />);
  //1.click on input, enter name -same for email
  //when click sub,it, call mock function
  const name = screen.getByRole("textbox", { name: /name/i });
  const email = screen.getByRole("textbox", { name: /email/i });
  const btn = screen.getByRole("button", { name: /user/i });

  user.click(name);
  user.keyboard("abc");

  user.click(email);
  user.keyboard("abc@gmail.com");

  user.click(btn);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "abc", email: "abc@gmail.com" });
});
