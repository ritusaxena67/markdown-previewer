import { useState } from "react";
import "./App.css";
import { marked } from "marked";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
 ## This is a sub-heading...

 [title](https://www.example.com)

 \`<div></div>\`
 \`\`\`
// // this is multi-line code:

function anotherExample(firstLine, lastLine) {
 if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
     return multiLineCode;
   }
 }
 \`\`\`
- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
  `);

  marked.setOptions({
    breaks: true,
  });
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        />
      </div>
    </>
  );
}

export default App;
