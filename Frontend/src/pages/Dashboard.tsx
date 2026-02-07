
import { useEffect, useState } from 'react'

import { Button } from '../components/Ui library/Button'
import { ContentModal } from '../components/ContentModal'
import { Card } from '../components/Ui library/Card'
import { PlusIcons } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import { ShareModal } from '../components/ShareModal'
import { LogoutModal } from '../components/LogoutModal'


function Dashboard() {
  const [addmodalOpen , setaddModalOpen]  = useState(false);
  const [sharemodalOpen , setShareModalOpen] = useState(false);
  const [logoutmodalOpen,  setLogoutModalOpen] = useState(false);
  const {contents, refresh} = useContent();


  useEffect(()=>{
    refresh();
  }, [addmodalOpen])

  return (<div className='flex'>
      <Sidebar onclick = {()=>setLogoutModalOpen(true)}/>
    <div className='bg-gray-100 h-screen w-full'>
      <LogoutModal open = {logoutmodalOpen} onClose={()=>setLogoutModalOpen(false)}/>
      <ContentModal open = {addmodalOpen} onClose={()=> setaddModalOpen(false)}/>
        <ShareModal open = {sharemodalOpen} onclose={()=>setShareModalOpen(false)} />
    <div className='flex justify-end gap-2 p-3'>
      <Button onClick={()=>setShareModalOpen(true)} variant='secondary' text = "Share Brain" size='md' startIcon={<ShareIcon size = "md"/>} />  
      <Button onClick={()=>setaddModalOpen(true)} variant='primary' text = "Add content" size='md' startIcon={<PlusIcons size='md'/>} /> 
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