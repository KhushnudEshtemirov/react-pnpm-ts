import { FormEvent } from "react";

const Login = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
        <input
          type="text"
          className="border rounded p-2 px-3 outline-none"
          placeholder="Enter username"
        />
        <input
          type="password"
          className="border rounded p-2 px-3 outline-none"
          placeholder="Enter  password"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white rounded p-2 px-4"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
