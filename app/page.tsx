"use client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Título */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Formulario de Contacto
        </h2>

        <Form className="space-y-5">
          {/* Nombre */}
          <Form.Group controlId="formBasicName">
            <Form.Label className="text-sm font-semibold text-gray-700  pr-2.5">
              Nombres
            </Form.Label>
            <Form.Control
              name="nombre"
              type="email"
              placeholder="Ingresa tu Nombre"
              className="mt-2 rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </Form.Group>

          {/* Apellidos */}
          <Form.Group controlId="formBasicLastName">
            <Form.Label className="text-sm font-semibold text-gray-700  pr-2.5">
              Apellidos
            </Form.Label>
            <Form.Control
              name="apellido"
              type="text"
              placeholder="Ingresa tus apellidos"
              className="mt-2 rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </Form.Group>
          {/* Telefono*/}
          <Form.Group controlId="formBasicPhone">
            <Form.Label className="text-sm font-semibold text-gray-700  pr-2.5">
              Telefono
            </Form.Label>
            <Form.Control
              name="telefono"
              type="number"
              inputMode="numeric"
              placeholder="Ingresa tu numero de telefono"
              maxLength={9}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // solo números
                if (value.length > 9) {
                  value = value.slice(0, 9); // corta en 9
                }
                e.target.value = value;
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-sm font-semibold text-gray-700 pr-2.5">
              Email
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ingresa tu email"
              className="mt-2 rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMensaje">
            <Form.Label className="text-sm font-semibold text-gray-700">
              Mensaje
            </Form.Label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Escribe tu mensaje..."
              rows={4}
            />
          </Form.Group>
          {/* Checkbox */}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label=" Recordarme"
              className="text-sm text-gray-600"
            />
          </Form.Group>

          {/* Botón */}
          <Button
            id="button"
            variant="primary"
            type="submit"
            className="w-full py-2 rounded-lg font-semibold bg-purple-600 border-none  hover:bg-purple-700 transition"
          >
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}
