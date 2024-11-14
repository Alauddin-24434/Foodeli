import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder, value, onChange, error }) => (
  <div className="mb-4">
    <label className="mb-2 block text-xs font-medium uppercase text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full cursor-pointer appearance-none rounded-md border border-gray-400 bg-gray-100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:shadow"
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export default InputField;
