"use client"

import React from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Warning from "@editorjs/warning";
import Marker from '@editorjs/marker';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table'
import Embed from '@editorjs/embed'
import Underline from '@editorjs/underline';
import AttachesTool from '@editorjs/attaches';
import { storeDraftedBlogAction } from "../Blog/redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Editor = ({ id, readOnly }: { id: string, readOnly: boolean }) => {

    const editorRef = React.useRef(null);

    const dispatch = useDispatch()

    const blogs = useSelector((store: any) => store.blog.blogs)
    const draftedBlogs = useSelector((store: any) => store.blog.draftedBlog)

    const allBlogs = [...draftedBlogs, ...blogs]

    const savedData = allBlogs.find((blog: any) => blog.id === id)?.content?.blocks ?? []

    React.useEffect(() => {
        if (!editorRef.current) {
            editorRef.current = new EditorJS({
                holder: "editorjs",
                readOnly: readOnly,
                placeholder: 'Type here...',
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: ['marker', 'link'],
                        config: {
                            placeholder: 'Header'
                        },
                        shortcut: 'CMD+SHIFT+H'
                    },

                    image: {
                        class: ImageTool,
                        config: {
                            caption: false,
                            endpoints: {
                                byFile: 'https://sustains-webserver.vercel.app/api/blog/image/upload', // Your backend file uploader endpoint
                            }
                        }
                    },

                    list: {
                        class: List,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+L'
                    },

                    checklist: {
                        class: Checklist,
                        inlineToolbar: true,
                    },

                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote\'s author',
                        },
                        shortcut: 'CMD+SHIFT+O'
                    },

                    warning: Warning,

                    marker: {
                        class: Marker,
                        shortcut: 'CMD+SHIFT+M'
                    },

                    code: {
                        class: CodeTool,
                        shortcut: 'CMD+SHIFT+C'
                    },

                    delimiter: Delimiter,

                    inlineCode: {
                        class: InlineCode,
                        shortcut: 'CMD+SHIFT+C'
                    },

                    linkTool: LinkTool,

                    embed: Embed,

                    table: {
                        class: Table,
                        inlineToolbar: true,
                        shortcut: 'CMD+ALT+T'
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                    },
                    attaches: {
                        class: AttachesTool,
                        config: {
                            endpoint: 'http://localhost:8008/uploadFile'
                        }
                    },
                    underline: Underline
                },

                onReady: () => { },
                onChange: async () => {
                    const content = await editorRef.current?.save();
                    const newContent = JSON.parse(JSON.stringify(content));
                    dispatch(storeDraftedBlogAction({
                        draft: true,
                        id,
                        content: newContent
                    }))
                },
                data: {
                    blocks: savedData
                }
            });
        }
    }, [])

    return (
        <div id="editorjs" className="w-full min-h-[700px] border p-5" ></div>
    )
}

export default Editor