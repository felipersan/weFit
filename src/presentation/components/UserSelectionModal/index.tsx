import React, { useEffect, useState } from 'react'
import { useModalize } from 'react-native-modalize'
import Button from '../UI/ButtonDefault'
import InputDefault from '../UI/InputDefault'
import { AreaButons, Container, TitleModal } from './styles'

type Props = {
  visible: boolean
  onClose: () => void
  onSearch: (nickName: string) => void
}

const UserSelectionModal = ({ visible, onClose, onSearch }: Props) => {
  const { ref, open, close } = useModalize()
  const [userSearch, setUserSearch] = useState<string>('felipersan')

  useEffect(() => {
    visible ? open() : close()
  }, [visible])

  return (
    <Container ref={ref} onClose={onClose}>
      <TitleModal>Alterar usuário Selecionado</TitleModal>
      <InputDefault
        placeholder={'Ex: felipersan'}
        change={e => {
          setUserSearch(e)
        }}
        title="Nome do Usuário"
        value={userSearch}
      />
      <AreaButons>
        <Button
          Press={() => {}}
          bgColor={'transparent'}
          color={'#1976D2'}
          full={true}
          font={'bold'}
          title={'CANCELAR'}
          size={'15px'}
        />
        <Button
          bgColor={'#1976D2'}
          color={'#fff'}
          full={true}
          font={'bold'}
          title={'SALVAR'}
          size={'15px'}
          Press={() => {
            onSearch(userSearch)
          }}
        />
      </AreaButons>
    </Container>
  )
}

export default UserSelectionModal
