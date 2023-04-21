import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
//import user from "@testing-library/user-event";

test("check no. of rows", () => {
  const users = [
    { name: "uma", email: "abc" },
    { name: "meena", email: "abcd" },
  ];
  const { container } = render(<UserList users={users} />);

  //const rows = screen.getAllByRole("row");
  //expect(rows).toHaveLength(2);
  //screen.logTestingPlaygroundURL();
  //const rows = within(screen.getByTestId("users")).getAllByRole("row");
  //screen.debug();
  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});

test("check 2 rows with content", () => {
  const users = [
    { name: "uma", email: "abc" },
    { name: "meena", email: "abcd" },
  ];
  render(<UserList users={users} />);
  for (let u of users) {
    const name = screen.getByRole("cell", { name: u.name });
    const email = screen.getByRole("cell", { name: u.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
