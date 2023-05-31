import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const FormAssignCell = () => {
  const [assignCell, setAssignCell] = useState({
    select_establecimiento: "",
    input_run: "",
    input_nombre: "",
    input_apellido: "",
    select_marca: "",
    select_modelo: "",
    input_imei: "",
    input_serial: "",
    select_numero: "",
    input_simcard: "",
  });

  const handleOnchange = (e) => {
    setAssignCell({
      ...assignCell,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  //usar api
  const [data, setData] = useState(null);
  useEffect(() =>{
    useFetch(setData)
  },[])

  const title = "Asignar Equipo Móvil";
  const subtitle = "Datos Funcionario";
  const subtitle2 = "Datos Equipo Celular";
  const subtitle3 = "Datos SIM";

  return (
    <div className="row my-3">
      <div>
        <div className="container card mb-1">
          <h1 className="text-center my-3 display-6">{title}</h1>
          {/* Datos Funcionario */}
          <div className="card-body">
            <div className="card-header py-2">
              <h5 className="mb-0">{subtitle}</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row my-2">
                <div className="col">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      id="select_establecimiento"
                      name="select_establecimiento"
                      value={assignCell.select_establecimiento}
                      onChange={handleOnchange}
                    >
                      <option value="0">Seleccione</option>
                      {data.map((establecimiento) => (
                        <option
                          key={establecimiento.id}
                          value={establecimiento.id}
                        >
                          {establecimiento.nombre}
                        </option>
                      ))}
                    </select>
                    <label
                      className="form-label"
                      htmlFor="select_establecimiento"
                    >
                      Establecimiento
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_run"
                      className="form-control"
                      name="input_run"
                      value={assignCell.input_run}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_run">
                      Run
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_nombre"
                      className="form-control"
                      name="input_nombre"
                      value={assignCell.input_nombre}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_nombre">
                      Nombre
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_apellido"
                      className="form-control"
                      name="input_apellido"
                      value={assignCell.input_apellido}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_apellido">
                      Apellido
                    </label>
                  </div>
                </div>
              </div>

              {/* Datos Celular */}
              <div className="card-header py-2">
                <h5 className="mb-0">{subtitle2}</h5>
              </div>

              <div className="row form-outline my-2">
                <div className="col">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      name="select_marca"
                      id="select_marca"
                      value={assignCell.select_marca}
                      onChange={handleOnchange}
                    >
                      <option value="0">Seleccione</option>
                      <option value="1">Samsung</option>
                      <option value="2">Apple</option>
                      <option value="3">Huawei</option>
                      <option value="4">Xiaomi</option>
                    </select>
                    <label className="form-label" htmlFor="select_marca">
                      Marca
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      name="select_modelo"
                      id="select_modelo"
                      value={assignCell.select_modelo}
                      onChange={handleOnchange}
                    >
                      <option value="0">Seleccione</option>
                      <option value="1">A20</option>
                      <option value="2">Iphone14</option>
                      <option value="3">P20</option>
                      <option value="4">Redmi10</option>
                    </select>
                    <label className="form-label" htmlFor="select_modelo">
                      Modelo
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_imei"
                      className="form-control"
                      name="input_imei"
                      value={assignCell.input_imei}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_imei">
                      IMEI
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_serial"
                      className="form-control"
                      name="input_serial"
                      value={assignCell.input_serial}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_serial">
                      Serial
                    </label>
                  </div>
                </div>
              </div>

              {/* Datos SIM */}
              <div className="card-header py-2">
                <h5 className="mb-0">{subtitle3}</h5>
              </div>

              <div className="row form-outline my-2">
                <div className="col form-floating">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      name="select_numero"
                      id="select_numero"
                      value={assignCell.select_numero}
                      onChange={handleOnchange}
                    >
                      <option value="0">Seleccione</option>
                      <option value="1">56933914541</option>
                      <option value="2">56973686668</option>
                      <option value="3">56978685144</option>
                      <option value="4">56985247155</option>
                    </select>
                    <label className="form-label" htmlFor="select_numero">
                      N° Telefónico
                    </label>
                  </div>
                </div>
                <div className="col form-floating">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="input_simcard"
                      className="form-control"
                      name="input_simcard"
                      value={assignCell.input_simcard}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="input_simcard">
                      SimCard
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAssignCell;
