import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Esaki ta un wega cu a gara popularidad rond mundo den e idioma Ingles cual nos a traduci e wega na Papiamento. 
        E wega aki ta existi tanto anja caba como e game show Lingo. NOTA: E wega ta den Papiamento etimologico.
        Instruccion pa hunga e wega Palabra:
        Rei palabra cu 5 letter na Papiamento.
        Si e palabra ta correcto, tur e letter nan lo bira color berde.
        Si e palabra ta full incorrecto, tur e letternan lo bira shinishi.
        Si tin un of mas letter ta na e posicion correcto, e letter lo bira berde.
        Si tin un of mas letter cu ta den e palabra cu ta den un posicion INcorrecto, e letter lo bira oranje.
        Bo tin totaal 6 chens pa rei e palabra, y cada dia tin un palabra nobo(cada 24 ora).   -{' '}
        
      </p>
    </BaseModal>
  )
}
