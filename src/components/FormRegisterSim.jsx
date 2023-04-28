import { useState } from "react";

const FormRegisterSim = () => {
  const [assignSim, setAssignSim] = useState({
    sim_number: "",
    simcard: "",
    select_estado: "0",
    sim_comments: "",
  });

  const handleOnchange = (e) => {
    setAssignSim({
      ...assignSim,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  const title = "Ingreso SIM";
  const subtitle = "Datos SIM";

  return (
    <div className="row my-3">
      <div>
        <div className="container card mb-1">
          <h1 className="text-center my-3 display-6">{title}</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Datos SIM */}
              <div className="card-header py-2">
                <h5 className="mb-0">{subtitle}</h5>
              </div>

              <div className="row form-outline my-2">
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="sim_number"
                      id="sim_number"
                      value={assignSim.sim_number}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="sim_number">
                      Número SIM
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline form-floating">
                    <input
                      type="text"
                      id="simcard"
                      className="form-control"
                      name="simcard"
                      value={assignSim.simcard}
                      onChange={handleOnchange}
                    />
                    <label className="form-label" htmlFor="simcard">
                      Simcard
                    </label>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline form-floating">
                    <select
                      className="form-select"
                      name="select_estado"
                      id="select_estado"
                      value={assignSim.select_estado}
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

                <div className="col">
                  <div className="form-outline form-floating">
                    <textarea
                      className="form-control"
                      name="sim_comments"
                      id="sim_comments"
                      value={assignSim.sim_comments}
                      onChange={handleOnchange}
                    ></textarea>
                    <label className="form-label" htmlFor="sim_comments">
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

export default FormRegisterSim;
