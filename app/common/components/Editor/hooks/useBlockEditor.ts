import { useEffect, useState } from 'react'
import { useEditor, useEditorState } from '@tiptap/react'
import type { AnyExtension, Editor, EditorOptions } from '@tiptap/core'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import type { Doc as YDoc } from 'yjs'

import { ExtensionKit } from '../extensions/extension-kit'
import { userColors, userNames } from '../lib/constants'
import { randomElement } from '../lib/utils'
import type { EditorUser } from '../components/BlockEditor/types'
import { initialContent } from '../lib/data/initialContent'
import { useDispatch, useSelector } from 'react-redux'
import { storeDraftedBlogAction } from '../../Blog/redux/actions'

declare global {
  interface Window {
    editor: Editor | null
  }
}

export const useBlockEditor = ({
  id,
  userName = 'Maxi',
  ...editorOptions
}: {
  id: string
  userName?: string
} & Partial<Omit<EditorOptions, 'extensions'>>) => {

  const dispatch = useDispatch()

  const blogs = useSelector((store: any) => store.blog.blogs)
  const draftedBlogs = useSelector((store: any) => store.blog.draftedBlog)

  const allBlogs = [...draftedBlogs, ...blogs]

  const savedData = allBlogs.find((blog: any) => blog.id === id)?.content ?? {}

  const user = useSelector((state: any) => state.login.user)

  const editor = useEditor(
    {
      ...editorOptions,
      immediatelyRender: true,
      shouldRerenderOnTransaction: false,
      autofocus: true,
      onCreate: ctx => {
          ctx.editor.commands.setContent(savedData)
          ctx.editor.commands.focus('start', { scrollIntoView: true })
      },
      onUpdate: ({ editor }) => {
        if (user.id) {
          const newContent = JSON.parse(JSON.stringify(editor.getJSON()));
          dispatch(storeDraftedBlogAction({
              draft: true,
              id,
              content: newContent,
              author: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
              }
          }))
        }
      },
      extensions: [
        ...ExtensionKit({
        })
      ].filter((e): e is AnyExtension => e !== undefined),
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
    },
    [],
  )

  window.editor = editor

  return { editor }
}
