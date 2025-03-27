
// Define types for our property lots
const colors = { available: "rgba(76, 175, 80, 0.3)", reserved: "rgba(255, 152, 0, 0.3)", sold: "rgba(244, 67, 54, 0.3)", }
export interface Lot {
  id: string
  name: string
  area: number
  price: number
  status: "available" | "reserved" | "sold"
  coordinates: [number, number][] // Array of [x, y] coordinates as percentages
  color: string,
  description: string
  characteristics: string[]
}

// Sample data for the lots
export const sampleLots: Lot[] = [
  {
    id: "A1",
    name: "Lote A1",
    area: 250,
    price: 1250000,
    status: "available",
    coordinates: [
      [17.5, 28],
      [48.5, 28],
      [48.5, 53],
      [17.5, 53],
    ],
    color: colors.available,
    description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
                las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
  {
    id: "A2",
    name: "Lote A2",
    area: 300,
    price: 1500000,
    status: "reserved",
    coordinates: [
      [17.5, 53],
      [48.5, 53],
      [48.5, 71],
      [17.5, 71],
    ],
    color: colors.reserved, description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
    las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
  {
    id: "A3",
    name: "Lote A3",
    area: 280,
    price: 1400000,
    status: "sold",
    coordinates: [
      [17.5, 71],
      [48.5, 71],
      [48.5, 89],
      [17.5, 89],
    ],
    color: colors.sold, description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
    las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
  {
    id: "B1",
    name: "Lote B1",
    area: 320,
    price: 1600000,
    status: "available",
    coordinates: [
      [54, 35],
      [82, 35],
      [82, 58],
      [54, 58],
    ],
    color: colors.available, description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
    las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
  {
    id: "B2",
    name: "Lote B2",
    area: 350,
    price: 1750000,
    status: "available",
    coordinates: [
      [54, 58],
      [82, 58],
      [82, 74],
      [54, 74],
    ],
    color: colors.available, description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
    las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
  {
    id: "C1",
    name: "Lote C1",
    area: 400,
    price: 2000000,
    status: "available",
    coordinates: [
      [54, 74],
      [82, 74],
      [82, 90],
      [54, 90],
    ],
    color: colors.available, description: `Hermoso lote ubicado en una zona privilegiada dentro de nuestro desarrollo. Cuenta con acceso a todas
    las amenidades del complejo y vistas espectaculares.`,
    characteristics: ["Acceso a áreas verdes", "Infraestructura completa", "Seguridad 24/7", "Servicios subterráneos",]
  },
]
