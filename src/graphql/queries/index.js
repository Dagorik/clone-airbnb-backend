import user from './user'
import propiedad from './propiedades'
import caracteristica from './caracteristicas'
import servicio from './servicios'
import reservacion from './reservaciones'

export default {
    ...user,
    ...propiedad,
    ...caracteristica,
    ...servicio,
    ...reservacion
}