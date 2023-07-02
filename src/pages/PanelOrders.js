import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const PanelOrders = ({ orders }) => {
    const [ordersList, setOrder] = useState(orders);
    const [modalOpen, setModalOpen] = useState(false);
    const [texto, setTexto] = useState("");
    const [IdOrder, setIdOrder] = useState(0);

    const handelModal = event => {
        const motivo = event.target.value;
        setTexto(motivo.trim());
    };
    const handelCancel = () => {
        const id_order = IdOrder;
        setOrder(
            ordersList.map(order =>
                order._id == id_order
                    ? { ...order, state: 5, description_cancel: texto }
                    : order
            )
        );
        setTexto("");
    };

    const deleteOrden = id_order => {
        setOrder(ordersList.filter(order => order._id !== id_order)); // Borramos la orden de la tabla
    };

    const setStateOrder = state => {
        let stateTitle = "";
        switch (state) {
            case 1:
                stateTitle = "Enviada";
                break;
            case 2:
                stateTitle = "En Despacho";
                break;
            case 3:
                stateTitle = "Entregada";
                break;
            case 4:
                stateTitle = "Devuelta por Curier";
                break;
            case 5:
                stateTitle = "Cancelada";
                break;
        }
        return stateTitle;
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <table className="m-auto border-separate text-gray-900 dark:text-white">
                    <thead>
                        <tr>
                            <th>Id_orden</th>
                            <th>Usuario</th>
                            <th>Estado de la Orden</th>
                            <th>Fecha de emision</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList.length > 0 ? (
                            ordersList.map(order => (
                                <tr
                                    className={
                                        order.state == 5
                                            ? "bg-red-200 dark:bg-gray-300"
                                            : ""
                                    }
                                    key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.user}</td>
                                    <td>{setStateOrder(order.state)}</td>
                                    <td>{order.timestamp}</td>
                                    <td>
                                        <button
                                            className="bg-red-600 
                                                       hover:bg-red-700 text-white font-bold 
                                                         py-1 px-2 rounded m-8"
                                            onClick={() => {
                                                setModalOpen(true);
                                                setIdOrder(order._id);
                                            }}>
                                            Cancelar Orden
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="bg-red-600 
                                                       hover:bg-red-700 text-white font-bold 
                                                         py-1 px-2 rounded m-8"
                                            onClick={() =>
                                                deleteOrden(order._id)
                                            }>
                                            Borrar Orden
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center" colSpan={6}>
                                    No hay ordenes por mostrar
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* Ventana emergente */}
                {modalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="flex flex-col bg-white rounded-lg p-8">
                            {/* Contenido de la ventana emergente */}
                            <div class="font-medium my-2">
                                <label className="">
                                    Motivo de la cancelación
                                </label>
                            </div>
                            <textarea
                                className="border border-gray-300 rounded-lg p-2 mb-4"
                                rows={4}
                                cols={50}
                                value={texto}
                                onChange={handelModal}
                            />
                            <button
                                className="bg-red-400 
                                          hover:bg-red-700 text-white font-bold 
                                           py-1 px-2 rounded m-8"
                                onClick={() => {
                                    setModalOpen(false);
                                    handelCancel();
                                }}>
                                Aplicar
                            </button>
                            <button
                                className="bg-red-400 
                                          hover:bg-red-700 text-white font-bold 
                                           py-1 px-2 rounded m-8"
                                onClick={() => setModalOpen(false)}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PanelOrders;
