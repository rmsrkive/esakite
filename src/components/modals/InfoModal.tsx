import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Con pa hunga" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Rei e palabra den 6 chens. Despues di rei cada biaha, 
        e color di e tegel lo cambia pa mustra con bon of robes bo rei tawata na e palabra.
        
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="A" />
        <Cell value="C" />
        <Cell value="H" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E letter C ta den e palabra y na e posicion correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="S" status="present" />
        <Cell value="C" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E letter S ta den e palabra pero den un posicion incorrecto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="absent" />
        <Cell value="U" />
        <Cell value="S" />
        <Cell value="H" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E letter D no ta den e palabra.
      </p>
    </BaseModal>
  )
}
