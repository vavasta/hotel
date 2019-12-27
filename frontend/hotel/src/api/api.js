import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    authorization: localStorage.getItem("token")
  }
});

class RequestClass {
  constructor(transport) {
    this.transport = transport;
  }
  //HALLS
  getHalls() {
    return this.transport.get("/halls");
  }
  addHall(title, description, imageURL) {
    return this.transport.post("/halls", {
      title,
      description,
      imageURL
    });
  }
  deleteHall(idToDelete) {
    return this.transport.delete(`/halls/${idToDelete}`);
  }
  testHall() {
    return this.transport.put("/test");
  }
  //TICKETS
  getTickets() {
    return this.transport.get("/tickets");
  }
  getTicketsParams() {
    return this.transport.get("/ticketsparams/:from/:to");
  }
  addTicket(from, to, hall_id, title) {
    return this.transport.post("/tickets", {
      from,
      to,
      hall_id,
      title
    });
  }
  updateTicket(from, to, buttonsId, title) {
    return this.transport.put(`/ticket/${buttonsId}`, {
      from,
      to,
      buttonsId,
      title
    });
  }
  deleteTicket(id) {
    return this.transport.delete(`/tickets/${id}`);
  }
  //USERS
  signUp(email, password, isAdmin) {
    return this.transport.post("/signUp", {
      email,
      password,
      isAdmin
    });
  }
  signIn(email, password, isAdmin) {
    return this.transport.post("/signIn", {
      email,
      password,
      isAdmin
    });
  }
}

const requestHttp = new RequestClass(instance);

export { requestHttp };
