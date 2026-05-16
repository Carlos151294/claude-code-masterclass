import { render, screen, fireEvent } from "@testing-library/react";
import AuthForm from "@/components/AuthForm";

describe("AuthForm — login mode", () => {
  it("renders email and password fields and a Log in button", () => {
    render(<AuthForm mode="login" />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("contains a link to /signup", () => {
    render(<AuthForm mode="login" />);
    const link = screen.getByRole("link", { name: /sign up/i });
    expect(link).toHaveAttribute("href", "/signup");
  });
});

describe("AuthForm — signup mode", () => {
  it("renders email and password fields and a Sign up button", () => {
    render(<AuthForm mode="signup" />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  it("contains a link to /login", () => {
    render(<AuthForm mode="signup" />);
    const link = screen.getByRole("link", { name: /log in/i });
    expect(link).toHaveAttribute("href", "/login");
  });
});

describe("AuthForm — password toggle", () => {
  it("starts with password hidden", () => {
    render(<AuthForm mode="login" />);
    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  it("shows password when toggle is clicked", () => {
    render(<AuthForm mode="login" />);
    fireEvent.click(screen.getByRole("button", { name: /show password/i }));
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "text");
  });

  it("hides password again on second click", () => {
    render(<AuthForm mode="login" />);
    const toggle = screen.getByRole("button", { name: /show password/i });
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole("button", { name: /hide password/i }));
    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );
  });
});

describe("AuthForm — form submission", () => {
  it("logs email and password to console on login submit", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<AuthForm mode="login" />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret" },
    });
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(spy).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "secret",
    });
    spy.mockRestore();
  });

  it("logs email and password to console on signup submit", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<AuthForm mode="signup" />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "new@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(spy).toHaveBeenCalledWith({
      email: "new@example.com",
      password: "password123",
    });
    spy.mockRestore();
  });
});
