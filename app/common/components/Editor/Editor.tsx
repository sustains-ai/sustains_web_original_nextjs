'use client'

import { useEditor, EditorContent, EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlock from '@tiptap/extension-code-block'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Color from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Focus from '@tiptap/extension-focus'
import FontFamily from '@tiptap/extension-font-family'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Table from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Typography from '@tiptap/extension-typography'
import Underline from '@tiptap/extension-underline'

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        BulletList,
        CharacterCount,
        CodeBlock,
        // CodeBlockLowlight,
        // Collaboration,
        // CollaborationCursor,
        Color,
        Document,
        Dropcursor,
        Focus,
        FontFamily,
        Heading,
        Highlight,
        HorizontalRule,
        Image,
        Link,
        OrderedList,
        Paragraph,
        Placeholder,
        Subscript,
        Superscript,
        Table.configure({
            resizable: true,
        }),
        TableHeader,
        TableRow,
        TableCell,
        TaskItem,
        TaskList,
        TextAlign,
        TextStyle,
        Typography,
        Underline,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  if (!editor) {
    return null
  }

  const content = '<p>Hello World!</p>'
  const extensions = [
    StarterKit,
    BulletList,
    CharacterCount,
    CodeBlock,
    // CodeBlockLowlight,
    // Collaboration,
    // CollaborationCursor,
    Color,
    Document,
    Dropcursor,
    Focus,
    FontFamily,
    Heading,
    Highlight,
    HorizontalRule,
    Image,
    Link,
    OrderedList,
    Paragraph,
    Placeholder,
    Subscript,
    Superscript,
    Table.configure({
        resizable: true,
    }),
    TableHeader,
    TableRow,
    TableCell,
    TaskItem,
    TaskList,
    TextAlign,
    TextStyle,
    Typography,
    Underline,
]

  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  )
}

export default TiptapEditor