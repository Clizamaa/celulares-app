import { useState } from "react";

const FormRegisterCell = () => {
  const [assignCell, setAssignCell] = useState({
    select_marca: "",
    select_modelo: "",
    input_imei: "",
    input_serial: "",
    select_estado: "",
    comments: "",
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

  const title = "Ingreso Equipo Móvil";
  const subtitle = "Datos Equipo Celular";

  return (
    <div className="row my-3">
      <div>
        <div className="container card mb-1">
          <h1 className="text-center my-3 display-6">{title}</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Datos Celular */}
              <div className="card-header py-2">
                <h5 className="mb-0">{subtitle}</h5>
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
                <div className="col-4">
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
                <div className="col-4">
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
                <div className="col-4">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      name="select_estado"
                      id="select_estado"
                      value={assignCell.select_estado}
                      onChange={handleOnchange}
                    >
                      <option value="0">Seleccione</option>
                      <option value="1">Bueno</option>
                      <option value="2">Malo</option>
                    </select>
                    <label className="form-label" htmlFor="select_estado">
                      Estado
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline form-floating">
                    <textarea
                      className="form-control"
                      name="comments"
                      id="comments"
                      value={assignCell.comments}
                      onChange={handleOnchange}
                    ></textarea>
                    <label className="form-label" htmlFor="comments">
                      Comentario
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

export default FormRegisterCell;
