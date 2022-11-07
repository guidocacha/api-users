import React, { useEffect, useState } from "react";

const Main = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    const modal = () => {

    }

    return (
        <div>
            <h1 className="m-5">Consumiendo una API de JSONPlaceholder (https://jsonplaceholder.typicode.com/users)</h1>
            <table className="table table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre y apellido</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Ver más</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <><tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                                <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target={`#${user.id}`}>+</button>

                                    {/* modal */}
                                    <div className="modal fade" id={user.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title text-dark" id="exampleModalLongTitle">{user.name}</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <ul className="text-dark">
                                                        <li>Nombre de usuario: {user.username}</li>
                                                        <li>E-mail: {user.email}</li>
                                                        <li>Direccion: {`calle ${user.address.street}, ciudad de ${user.address.city}`}</li>
                                                        <li>Código postal: {user.address.zipcode}</li>
                                                        <li>Teléfono: {user.phone}</li>
                                                        <li>Web: <a href={`https://www.${user.website}`} target="_blank">{user.website}</a> </li>
                                                    </ul>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ---- */}

                                </td>
                            </tr></>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;    