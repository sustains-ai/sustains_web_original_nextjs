'use client'

import { Icon } from '../../../components/ui/Icon'
import { Toolbar } from '../../../components/ui/Toolbar'
import { Editor } from '@tiptap/core'
import { useEditorState } from '@tiptap/react'
import React, { useCallback } from 'react'
import { Check, X, HomeIcon } from "lucide-react";
import { cn } from '../../../lib/utils'
import { redirect } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addBlogAction, deleteDraftedBlogAction, updateBlogAction } from '@/app/common/components/Blog/redux/actions'
import { BLOG_TYPES } from '@/app/common/constants'
import { CircularProgress } from '@mui/material'

export type EditorHeaderProps = {
  id: string,
  isSidebarOpen?: boolean
  toggleSidebar?: () => void
  editor: Editor
}

export const EditorHeader = ({ id, editor, isSidebarOpen, toggleSidebar }: EditorHeaderProps) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState(BLOG_TYPES[0]);

  const toggleEditable = useCallback(() => {
    editor.setOptions({ editable: !editor.isEditable })
    // force update the editor
    editor.view.dispatch(editor.view.state.tr)
  }, [editor])

  const dispatch = useDispatch()
  const draftedBlog = useSelector((store: any) => store.blog.draftedBlog).find((blog: any) => blog.id === id) ?? {}
  const blogs = useSelector((store: any) => store.blog.blogs)
  const blogIds = blogs.map((blog: any) => blog.id)

  const handlePublish = () => {
    if (blogIds.includes(id)) {
      dispatch(updateBlogAction({ id, blog_type: selectedType, content: draftedBlog.content, author: draftedBlog.author }))
    } else {
      dispatch(addBlogAction({ id, blog_type: selectedType, content: draftedBlog.content, author: draftedBlog.author }))
    }
    setModalOpen(false)
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard changes? This action cannot be undone.")) {
      dispatch(deleteDraftedBlogAction(id))
      window.location.href = "/blog"
    }
  };

  const windowClassName = cn(
    "w-full fixed top-0 flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800 bg-white z-[999]",
    isSidebarOpen && 'w-[calc(100%-320px)]',
  )

  return (
    <div className="flex flex-row items-center justify-between flex-none py-2 pl-6 pr-3 text-black bg-white border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
      <div className="flex flex-row gap-x-1.5 items-center">
        <div className="flex items-center gap-x-1.5">
          <Toolbar.Button
            tooltip={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            onClick={toggleSidebar}
            active={isSidebarOpen}
            className={isSidebarOpen ? 'bg-transparent' : ''}
          >
            <Icon name={isSidebarOpen ? 'PanelLeftClose' : 'PanelLeft'} />
          </Toolbar.Button>
          <Toolbar.Button tooltip={editor.isEditable ? 'Disable editing' : 'Enable editing'} onClick={toggleEditable}>
            <Icon name={editor.isEditable ? 'PenOff' : 'Pen'} />
          </Toolbar.Button>
          <Toolbar.Button tooltip={'Redirect to blogs page'} onClick={() => redirect("/blog")}>
            <Icon name={"House"} />
          </Toolbar.Button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* <EditorInfo characters={characters} words={words} /> */}
        <div className="flex gap-3">
          {/* Discard Button */}
          <button
            onClick={handleDiscard}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold text-sm px-4 py-2 rounded flex items-center gap-2"
          >
            <X size={16} /> Discard
          </button>

          {/* Publish Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-4 py-2 rounded flex items-center gap-2"
          >
            <Check size={16} /> Publish
          </button>
        </div>
      </div>
      {/* Publish Modal */}
      {isModalOpen && (
        <div className="fixed z-[999] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Select Blog Type</h3>
            <select
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {BLOG_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-700 font-bold text-white px-4 py-2 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 font-bold text-white px-4 py-2 rounded"
                onClick={handlePublish}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
