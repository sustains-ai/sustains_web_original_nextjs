import { cn } from '../../lib/utils'
import { memo, useCallback } from 'react'
import { Editor } from '@tiptap/react'
import { TableOfContents } from '../TableOfContents'

export const Sidebar = memo(
  ({ editor, isOpen, onClose }: { editor: Editor; isOpen?: boolean; onClose: () => void }) => {
    const handlePotentialClose = useCallback(() => {
      if (window.innerWidth < 1024) {
        onClose();
      }
    }, [onClose]);

    const sidebarClass = cn(
      'fixed lg:relative top-0 left-0 z-50 bg-white dark:bg-black transition-all duration-300 ease-in-out pt-8',
      'h-screen lg:h-full',
      'overflow-hidden',
      // Mobile sidebar toggle
      isOpen ? 'w-[260px]' : 'w-0',
      // Large screen: always visible and wide
      'lg:w-[300px] lg:border-r lg:border-neutral-200 dark:lg:border-neutral-800',
      'lg:bg-white/30 lg:backdrop-blur-xl lg:dark:bg-black/30'
    );

    return (
      <div className={sidebarClass}>
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full p-6 overflow-y-auto">
            <TableOfContents onItemClick={handlePotentialClose} editor={editor} />
          </div>
        </div>
      </div>
    );
  }
);


Sidebar.displayName = 'TableOfContentSidepanel'
