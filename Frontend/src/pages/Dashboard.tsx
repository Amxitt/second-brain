
import { useEffect, useState } from 'react'

import { Button } from '../components/Ui library/Button'
import { ContentModal } from '../components/ContentModal'
import { Card } from '../components/Ui library/Card'
import { PlusIcons } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'


function Dashboard() {
  const [modalOpen , setModalOpen]  = useState(false);
  const {contents, refresh} = useContent()

  useEffect(()=>{
    refresh();
  }, [modalOpen])

  return (<div className='flex'>
      <Sidebar/>
    <div className='bg-gray-100 h-screen w-full'>
      <ContentModal open = {modalOpen} onClose={()=> setModalOpen(false)}/>
    <div className='flex justify-end gap-2 p-3'>
      <Button variant='secondary' text = "Share Brain" size='md' startIcon={<ShareIcon size = "md"/>} />  
      <Button onClick={()=>setModalOpen(true)} variant='primary' text = "Add content" size='md' startIcon={<PlusIcons size='md'/>} /> 
    </div>
     <div className='flex gap-2  p-4 flex-wrap'>
      {contents.map(({type, link , title })=> <Card
       title={title} 
       link={link} 
       type={type}
      />)}
      
     </div> 
   </div>
    </div>

  )
}

export default Dashboard