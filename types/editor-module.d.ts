declare module '@editorjs/editorjs' {
  export default class EditorJS {
    constructor(config: any);
    isReady: Promise<void>;
    render(): void;
    save(): Promise<any>;
    destroy(): void;
  }
}

declare module '@editorjs/header' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Header implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Header;
}

declare module '@editorjs/image' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class ImageTool implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default ImageTool;
}

declare module '@editorjs/list' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class List implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default List;
}

declare module '@editorjs/checklist' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Checklist implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Checklist;
}

declare module '@editorjs/quote' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Quote implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Quote;
}

declare module '@editorjs/warning' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Warning implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Warning;
}

declare module '@editorjs/marker' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';

  class Marker implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Marker;
}

declare module '@editorjs/code' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class CodeTool implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default CodeTool;
}

declare module '@editorjs/delimiter' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Delimiter implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Delimiter;
}

declare module '@editorjs/inline-code' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class InlineCode implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default InlineCode;
}

declare module '@editorjs/link' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class LinkTool implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default LinkTool;
}

declare module '@editorjs/paragraph' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Paragraph implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Paragraph;
}

declare module '@editorjs/table' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Table implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Table;
}

declare module '@editorjs/embed' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Embed implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Embed;
}

declare module '@editorjs/underline' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class Underline implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default Underline;
}

declare module '@editorjs/attaches' {
  import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
  
  class AttachesTool implements ToolConstructable {
    constructor(config: ToolSettings);
    static get toolbox(): { title: string; icon: string };
    render(): HTMLElement;
    save(blockContent: HTMLElement): { data: any };
  }

  export default AttachesTool;
}
