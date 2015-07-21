$(function () {
  if ( jsZenEdit && jsZenEdit.registerHelp ) {
    jsZenEdit.registerHelp('<div class="help-box" id="pandoc-quick-help">\n\n  <nav id="pandoc-quick-help-nav">\n    <a href="#pandoc-quick-help-structure">文章架構</a>\n    <a href="#pandoc-quick-help-link">連結/圖片</a>\n    <a href="#pandoc-quick-help-codeblock">程式碼/引言</a>\n    <a href="#pandoc-quick-help-list">清單</a>\n    <a href="#pandoc-quick-help-table">表格</a>\n    <a href="#pandoc-quick-help-inline">內文樣式</a>\n    <a href="http://pages.tzengyuxio.me/pandoc/" target="_blank">完整說明</a>\n  </nav>\n\n  <div class="content" id="pandoc-quick-help-content">\n    <section id="pandoc-quick-help-structure">\n      <h4>文章架構</h4>\n      <h5>Setext 風格標題</h5>\n      <p>Setext 風格的標題是由一行文字底下接著一行 = 符號（用於一階標題）或 - 符號（用於二階標題）所構成：</p>\n      <pre><code>A level-one header\n==================\n\nA level-two header\n------------------</code></pre>\n      <h5>Atx 風格標題</h5>\n      <p>標題是由一到六個 # 符號以及一行文字所組成，你可以在文字後面加上任意數量的 # 符號。由行首起算的 # 符號數量決定了標題的階層：</p>\n      <pre><code>## A level-two header\n\n### A level-three header ###</code></pre>\n      <h5>段落</h5>\n      <p>一個段落指的是一行以上的文字，跟在一行以上的空白行之後。換行字元會被當作是空白處理，因此你可以依自己喜好排列段落文字。</p>\n      <pre><code>段落一\n段落一\n段落一\n\n段落二</code></pre>\n      <p>如果你需要強制換行，在行尾放上兩個以上的空白字元即可。</p>\n    </section>\n    <section id="pandoc-quick-help-link">\n      <h4>連結/圖片</h4>\n      <h5>自動連結</h5>\n      <p>如果你用角括號將一段 URL 或是 email 位址包起來，它會自動轉換成連結：</p>\n      <pre><code>&lt;http://google.com&gt;\n&lt;sam@green.eggs.ham&gt;</code></pre>\n      <h5>內文連結</h5>\n      <p>一個行內連結包含了位在方括號中的連結文字，以及方括號後以圓括號包起來的 URL。</p>\n      <pre><code>This is an [inline link](/url), and here\'s [one with\na title](http://fsf.org "click here for a good time!").</code></pre>\n      <h5>參考連結</h5>\n      <p>一個 明確 的參考連結包含兩個部分，連結本身以及連結定義，其中連結定義可以放在文件的任何地方。</p>\n      <p>連結本身是由兩組方括號所組成，第一組方括號中為連結文字，第二組為連結標籤。連結定義則是以方括號框住的連結標籤作開頭，後面跟著一個冒號一個空白，再接著一個 URL。</p>\n      <pre><code>Here is [my link][Foo]\n\n[Foo]: /bar/baz</code></pre>\n      <p>在一個 隱性 參考連結中，第二組方括號的內容是空的，甚至可以完全地略去：</p>\n      <pre><code>See [my website][], or [my website].\n\n[my website]: http://foo.bar.baz</code></pre>\n      <h5>圖片</h5>\n      <p>在連結語法的前面加上一個 ! 就是圖片的語法了。連結文字將會作為圖片的替代文字：</p>\n      <pre><code>![la lune](lalune.jpg "Voyage to the moon")\n\n![movie reel]\n\n[movie reel]: movie.gif</code></pre>\n    </section>\n    <section id="pandoc-quick-help-codeblock">\n      <h4>程式碼/引言</h4>\n      <h5>代碼</h5>\n      <p>一段以四個空白縮進的文字區塊會被視為代碼區塊</p>\n      <pre><code>    if (a &gt; 3) {\n      moveShip(5 * gravity, DOWN);\n    }</code></pre>\n      <p>也可以使用 <code>```</code> 來包圍代碼並加上代碼所使用的程式語言：</p>\n      <pre><code>```haskell\nqsort [] = []\n``` </code></pre>\n      <h5>引言</h5>\n      <p>Pandoc 使用 email 的習慣來建立引言區塊。一個引言區塊可以由一或多個段落或其他的區塊元素（如清單或標題）組成，並且其行首均是由一個 &gt; 符號加上一個空白作為開頭。</p>\n      <pre><code>&gt; This is a block quote. This\n&gt; paragraph has two lines.\n&gt;\n&gt; 1. This is a list inside a block quote.\n&gt; 2. Second item.  </code></pre>\n    </section>\n    <section id="pandoc-quick-help-list">\n      <h4>清單</h4>\n      <h5>無序清單</h5>\n      <p>無序清單是以項目符號作列舉的清單。每條項目都以項目符號 (*, + 或 -) 作開頭。下面是個簡單的例子：</p>\n      <pre><code>* one\n* two\n* three</code></pre>\n      <p>清單項目也可以包含其他清單。在這情況下前置的空白行是可有可無的。嵌套清單必須以四個空白或一個 tab 作縮進：</p>\n      <pre><code>* fruits\n    + apples\n        - macintosh\n        - red delicious\n    + pears\n    + peaches\n* vegetables\n    + brocolli\n    + chard</code></pre>\n      <h5>有序清單</h5>\n      <p>有序清單與無序清單相類似，唯一的差別在於清單項目是以列舉編號作開頭，而不是項目符號。</p>\n      <pre><code>1.  one\n2.  two\n3.  three</code></pre>\n      <p>Pandoc 也能判讀清單的起始編號，這兩項資訊都會保留於輸出格式中。舉例來說，下面的輸入可以產生一個從編號 9 開始</p>\n      <pre><code> 9)  Ninth\n10)  Tenth\n11)  Eleventh</code></pre>\n    </section>\n    <section id="pandoc-quick-help-table">\n      <h4>表格</h4>\n      <h5>簡單表格</h5>\n      <p>簡單表格看起來像這樣子：</p>\n      <pre><code>  Right     Left     Center     Default\n-------     ------ ----------   -------\n     12     12        12            12\n    123     123       123          123\n      1     1          1             1</code></pre>\n      <h5>多行表格</h5>\n      <p><a href="http://pages.tzengyuxio.me/pandoc/#%E5%A4%9A%E8%A1%8C%E8%A1%A8%E6%A0%BC">多行表格</a>允許表頭與表格資料格的文字能以複數行呈現。</p>\n    </section>\n    <section id="pandoc-quick-help-inline">\n      <h4>內文樣式</h4>\n      <h5>強調</h5>\n      <p>要 強調 某些文字，只要以 * 或 _ 符號前後包住即可，像這樣：</p>\n      <pre><code>This text is _emphasized with underscores_, and this\nis *emphasized with asterisks*.</code></pre>\n      <p>重複兩個 * 或 _ 符號以產生 更強烈的強調：</p>\n      <pre><code>This is **strong emphasis** and __with underscores__.</code></pre>\n      <p>一個前後以空白字元包住，或是前面加上反斜線的 * 或 _ 符號，都不會轉換為強調格式：</p>\n      <pre><code>This is * not emphasized *, and \\*neither is this\\*. </code></pre>\n      <h5>刪除線</h5>\n      <p>要將一段文字加上水平線作為刪除效果，將該段文字前後以 ~~ 包住即可。例如：</p>\n      <pre><code>This ~~is deleted text.~~</code></pre>\n      <h5>上標與下標</h5>\n      <p>要輸入上標可以用 ^ 字元將要上標的文字包起來；要輸入下標可以用 ~ 字元將要下標的文字包起來。範例：</p>\n      <pre><code>H~2~O is a liquid.  2^10^ is 1024.</code></pre>\n    </section>\n  </div>\n\n</div>\n');
  }
});
