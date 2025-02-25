import { useState } from "react";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    plate: "",
    model: "",
    year: "",
    maintenance: []
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addVehicle = () => {
    setVehicles([...vehicles, { ...form, id: Date.now() }]);
    setForm({ plate: "", model: "", year: "", maintenance: [] });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Oficina Mecânica</h1>
      <div className="mt-4">
        <input
          type="text"
          name="plate"
          placeholder="Placa"
          value={form.plate}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="model"
          placeholder="Modelo"
          value={form.model}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="year"
          placeholder="Ano"
          value={form.year}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <button onClick={addVehicle} className="bg-blue-500 text-white p-2">Adicionar Veículo</button>
      </div>
      <ul className="mt-4">
        {vehicles.map((v) => (
          <li key={v.id} className="border p-2 mt-2">
            {v.plate} - {v.model} ({v.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
