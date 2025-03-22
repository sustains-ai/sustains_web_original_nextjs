import { EditorContent } from '@tiptap/react'
import React, { useRef, useState } from 'react'

import { LinkMenu } from '../../components/menus'

import { useBlockEditor } from '../../hooks/useBlockEditor'

import '../../styles/index.css'

import ImageBlockMenu from '../../extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '../../extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '../../extensions/Table/menus'
import { EditorHeader } from './components/EditorHeader'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'
import { Sidebar } from '../Sidebar'
import { useSidebar } from '../../hooks/useSidebar'

export const BlockEditor = ({ id }: { id: string }) => {
  const [isEditable, setIsEditable] = useState(true)
  const menuContainerRef = useRef(null)

  const leftSidebar = useSidebar()

  const { editor } = useBlockEditor({
    id,
    editable: true,
    onTransaction({ editor: currentEditor }) {
      setIsEditable(currentEditor.isEditable)
    },
  })

  if (!editor) {
    return null
  }


  return (
    <div className="flex h-full" ref={menuContainerRef}>
      <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor}/>
      <div className="relative flex flex-col flex-1 h-full overflow-hidden">
        <EditorHeader
          id={id}
          editor={editor}
          isSidebarOpen={leftSidebar.isOpen}
          toggleSidebar={leftSidebar.toggle}
        />
        <div className='h-screen overflow-y-auto'>
          <EditorContent editor={editor} className={"flex-1 overflow-y-auto"} />
        </div>
        <ContentItemMenu editor={editor} isEditable={isEditable} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  )
}

export default BlockEditor
