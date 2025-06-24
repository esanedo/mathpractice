import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login() {
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: `${alias}@example.com`, // alias-based login
      password,
    });
    setError(error?.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          className="w-full border p-2 mb-3"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Log In</button>
      </form>
    </div>
  );
}
