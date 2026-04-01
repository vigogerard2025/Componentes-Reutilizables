"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CIUDADES = [
  "Trujillo",
  "Juanjui",
  "Lima",
  "Chiclayo",
  "Piura",
  "Tarapoto",
  "Moyobamba",
  // Agrega las ciudades que opera tu empresa
];

export default function CompraForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    const form = formRef.current!;

    const templateParams = {
      dni: (form.elements.namedItem("dni") as HTMLInputElement).value,
      pasajero: (form.elements.namedItem("pasajero") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      origen: (form.elements.namedItem("origen") as HTMLSelectElement).value,
      destino: (form.elements.namedItem("destino") as HTMLSelectElement).value,
      direccion: (form.elements.namedItem("direccion") as HTMLInputElement)
        .value,
      fecha_viaje: (form.elements.namedItem("fecha_viaje") as HTMLInputElement)
        .value,
      hora_viaje: (form.elements.namedItem("hora_viaje") as HTMLInputElement)
        .value,
      asiento: (form.elements.namedItem("asiento") as HTMLInputElement).value,
      precio: (form.elements.namedItem("precio") as HTMLInputElement).value,
    };

    emailjs
      .send(
        "service_66srl8r",
        "template_cs3g8t2",
        templateParams,
        "hBAVxZ9sXEVU5ti17",
      )
      .then(() => {
        alert("¡Solicitud enviada correctamente!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error al enviar. Intenta nuevamente.");
      })
      .finally(() => setEnviando(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        {/* Header estilo boleta */}
        <div className="text-center border-b-2 border-dashed border-gray-400 pb-4 mb-6">
          <h1 className="text-3xl font-black tracking-widest uppercase">
            Tu Empresa
          </h1>
          <p className="text-sm text-gray-500">
            TU EMPRESA S.A.C. — RUC: 000000000
          </p>
          <p className="text-sm text-gray-500">Trujillo — 999 000 000</p>
          <div className="mt-2 inline-block border border-gray-800 px-3 py-1 text-xs font-bold tracking-widest">
            COMPRA DE PASAJE
          </div>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* DNI */}
          <Form.Group controlId="dni">
            <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
              Nro. Documento (DNI)
            </Form.Label>
            <Form.Control
              name="dni"
              type="text"
              inputMode="numeric"
              placeholder="Ej: 12345678"
              maxLength={8}
              required
              className="rounded-lg"
            />
          </Form.Group>

          {/* Nombre completo */}
          <Form.Group controlId="pasajero">
            <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
              Nombre del Pasajero
            </Form.Label>
            <Form.Control
              name="pasajero"
              type="text"
              placeholder="Apellidos y Nombres"
              required
              className="rounded-lg"
            />
          </Form.Group>

          {/* Teléfono */}
          <Form.Group controlId="telefono">
            <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
              Teléfono
            </Form.Label>
            <Form.Control
              name="telefono"
              type="tel"
              inputMode="numeric"
              placeholder="Ej: 987654321"
              maxLength={9}
              required
              className="rounded-lg"
            />
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="email">
            <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
              Correo Electrónico
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              className="rounded-lg"
            />
          </Form.Group>

          {/* Origen y Destino en fila */}
          <div className="grid grid-cols-2 gap-4">
            <Form.Group controlId="origen">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Origen
              </Form.Label>
              <Form.Select name="origen" required className="rounded-lg">
                <option value="">Seleccionar</option>
                {CIUDADES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="destino">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Destino
              </Form.Label>
              <Form.Select name="destino" required className="rounded-lg">
                <option value="">Seleccionar</option>
                {CIUDADES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          {/* Dirección de embarque */}
          <Form.Group controlId="direccion">
            <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
              Dirección de Embarque
            </Form.Label>
            <Form.Control
              name="direccion"
              type="text"
              placeholder="Ej: Av. Nicolás de Piérola 1230"
              required
              className="rounded-lg"
            />
          </Form.Group>

          {/* Fecha y Hora de viaje en fila */}
          <div className="grid grid-cols-2 gap-4">
            <Form.Group controlId="fecha_viaje">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Fecha de Viaje
              </Form.Label>
              <Form.Control
                name="fecha_viaje"
                type="date"
                required
                className="rounded-lg"
              />
            </Form.Group>

            <Form.Group controlId="hora_viaje">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Hora de Viaje
              </Form.Label>
              <Form.Control
                name="hora_viaje"
                type="time"
                required
                className="rounded-lg"
              />
            </Form.Group>
          </div>

          {/* Asiento y Precio en fila */}
          <div className="grid grid-cols-2 gap-4">
            <Form.Group controlId="asiento">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Nro. Asiento
              </Form.Label>
              <Form.Control
                name="asiento"
                type="number"
                placeholder="Ej: 20"
                min={1}
                required
                className="rounded-lg"
              />
            </Form.Group>

            <Form.Group controlId="precio">
              <Form.Label className="text-xs uppercase text-gray-500 font-semibold">
                Precio (S/)
              </Form.Label>
              <Form.Control
                name="precio"
                type="number"
                placeholder="Ej: 130.00"
                step="0.01"
                min={0}
                required
                className="rounded-lg"
              />
            </Form.Group>
          </div>

          {/* Separador dashed */}
          <div className="border-t-2 border-dashed border-gray-300 my-2" />

          {/* Botón */}
          <Button
            type="submit"
            disabled={enviando}
            className="w-full py-2 rounded-lg font-bold tracking-widest bg-purple-600 border-none hover:bg-purple-700 transition text-white"
          >
            {enviando ? "ENVIANDO..." : "COMPRAR PASAJE"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
