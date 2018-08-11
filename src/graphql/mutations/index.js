import Servicio from './servicios'
import Propiedad from './propiedades'
import Carcateristica from './caracteristicas'
import Reservacion from './reservaciones'

export default {
    ...Servicio,
    ...Propiedad,
    ...Carcateristica,
    ...Reservacion
}