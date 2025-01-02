import React, { useState } from "react";

function Login({handleLogin}) {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

  const Submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    console.log("email is " ,email);
    console.log("password is " , password);

    setPassword("");
    setemail("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => Submithandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setemail(e.target.value);
          }}
            required
            className="px-3 py-1 text-white rounded-full text-xl bg-transparent outline-none border-2 border-emerald-600 placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            className="mt-3 px-3 py-1 text-white rounded-full text-xl bg-transparent outline-none border-2 border-emerald-600 placeholder:text-gray-400 "
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 px-20 py-2 hover:bg-zinc-500 text-gray-100 rounded-full text-xl outline-none border-none bg-emerald-600 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
