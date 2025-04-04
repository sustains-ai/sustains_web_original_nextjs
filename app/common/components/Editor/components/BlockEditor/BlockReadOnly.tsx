import { EditorContent } from '@tiptap/react'
import React, { useRef, useState } from 'react'

import { LinkMenu } from '../menus'

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

export const BlockReadOnly = ({ id }: { id: string }) => {
  const menuContainerRef = useRef(null)

  const leftSidebar = useSidebar()

  const { editor } = useBlockEditor({ id, editable: false })

  if (!editor) {
    return null
  }

  return (
    <div className="flex h-screen min-h-screen pt-5 overflow-hidden" ref={menuContainerRef}>
      {/* Sidebar */}
      <Sidebar
        isOpen={leftSidebar.isOpen}
        onClose={leftSidebar.close}
        editor={editor}
      />

      {/* Main Content */}
      <div className="relative flex flex-col flex-1 h-full">
        {leftSidebar.isOpen && window.innerWidth < 1024 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={leftSidebar.close}
          />
        )}
        <EditorHeader
          id={id}
          editor={editor}
          isSidebarOpen={leftSidebar.isOpen}
          toggleSidebar={leftSidebar.toggle}
          readOnly={true}
        />
        <div className="overflow-y-auto">
          <EditorContent editor={editor} className="" />
        </div>
      </div>
    </div>

  )
}

export default BlockReadOnly
