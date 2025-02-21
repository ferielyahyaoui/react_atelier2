import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AjouterEvent() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
    description: "",
    img: null,
    price: "",
    nbTickets: "",
    nbParticipants: "",
    like: false,
  });

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setEvent({
      ...event,
      img: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
    navigate("/events");
  };
  return (
    <>
        <Header></Header>
      <div className="container p-2 mt-5">
        <p></p>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <h3>Ajouter une événement avec fluidité!</h3>
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body p-0">
              <form className="row g-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label className="form-label">
                    Titre de Evenement
                  </label>
                  <input type="text" className="form-control" name="name" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Description *</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={event.description}
                    onChange={handleChnage}
                    rows={3}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Télécharger une image *</label>
                  <input
                    type="file"
                    className="form-control"
                    name="img"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Prix *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={event.price}
                    onChange={handleChnage}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Nombre de tickets *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="nbTickets"
                    value={event.nbTickets}
                    onChange={handleChnage}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Nombre de participants *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="nbParticipants"
                    value={event.nbParticipants}
                    onChange={handleChnage}
                  />
                </div>

                <div className="col-12">
                  <Button className="btn btn-dark mb-0" type="submit">
                    Ajouter Evenement
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AjouterEvent;